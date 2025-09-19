'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { User, Mail, Phone, MessageSquare, MapPin, Zap, Home, Shield, Network, CheckCircle, Clock, AlertCircle, Inbox, LogOut } from 'lucide-react';
import withAuth from '@/components/auth/withAuth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

interface Demande {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  projectType: string;
  address: string;
  urgency: string;
  message: string;
  createdAt: any;
}

const serviceIcons: { [key: string]: React.ElementType } = {
  fttr: Zap,
  'smart-home': Home,
  security: Shield,
  network: Network,
  multiple: CheckCircle,
};

const DashboardPage = () => {
  const [demandes, setDemandes] = useState<Demande[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const q = query(collection(db, 'demandes'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const demandesData: Demande[] = [];
      querySnapshot.forEach((doc) => {
        demandesData.push({ id: doc.id, ...doc.data() } as Demande);
      });
      setDemandes(demandesData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching demandes: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  const getUrgencyInfo = (urgency: string) => {
    switch (urgency) {
      case 'urgent':
        return { text: 'Urgent', color: 'text-red-500', bgColor: 'bg-red-100' };
      case 'normal':
        return { text: 'Normal', color: 'text-yellow-500', bgColor: 'bg-yellow-100' };
      case 'planning':
        return { text: 'Planification', color: 'text-blue-500', bgColor: 'bg-blue-100' };
      default:
        return { text: urgency, color: 'text-gray-500', bgColor: 'bg-gray-100' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Dashboard des Devis</h1>
            <p className="mt-2 text-lg text-gray-600">Dernières demandes reçues en temps réel.</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary mr-4">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
              {demandes.length} {demandes.length > 1 ? 'demandes' : 'demande'}
            </span>
            <button onClick={handleLogout} className="btn-secondary flex items-center">
                <LogOut className="h-4 w-4 mr-2"/>
                Déconnexion
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : demandes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <Inbox className="mx-auto h-16 w-16 text-gray-400" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Boîte de réception vide</h3>
            <p className="mt-2 text-gray-500">Aucune demande de devis pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {demandes.map((demande) => {
              const ServiceIcon = serviceIcons[demande.service] || MessageSquare;
              const urgencyInfo = getUrgencyInfo(demande.urgency);

              return (
                <div key={demande.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1">
                  <div className={`p-5 border-l-4 border-primary`}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-2 rounded-lg mr-4">
                          <ServiceIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-gray-800 capitalize">{demande.service.replace('-', ' ')}</h2>
                          <p className="text-sm text-gray-500">{demande.projectType}</p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${urgencyInfo.bgColor} ${urgencyInfo.color}`}>
                        {urgencyInfo.text}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 border-t border-gray-100">
                    <div className="space-y-4 text-sm">
                      <div className="flex items-center text-gray-700">
                        <User className="h-4 w-4 mr-3 text-gray-400" />
                        <span className="font-semibold">{demande.name}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Mail className="h-4 w-4 mr-3 text-gray-400" />
                        <a href={`mailto:${demande.email}`} className="hover:text-primary transition-colors">{demande.email}</a>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="h-4 w-4 mr-3 text-gray-400" />
                        <a href={`tel:${demande.phone}`} className="hover:text-primary transition-colors">{demande.phone}</a>
                      </div>
                      <div className="flex items-start text-gray-700">
                        <MapPin className="h-4 w-4 mr-3 text-gray-400 mt-0.5" />
                        <span>{demande.address}</span>
                      </div>
                    </div>
                  </div>

                  {demande.message && (
                    <div className="p-5 bg-gray-50/70 border-t border-gray-100">
                      <h4 className="font-semibold text-sm text-gray-600 mb-2">Message</h4>
                      <p className="text-sm text-gray-700 leading-relaxed bg-white p-3 rounded-md border border-gray-200">{demande.message}</p>
                    </div>
                  )}

                  <div className="p-4 bg-gray-50 text-right border-t border-gray-100">
                    <div className="flex items-center justify-end text-xs text-gray-500">
                      <Clock className="h-3.5 w-3.5 mr-1.5" />
                      <span>{new Date(demande.createdAt?.toDate()).toLocaleString('fr-FR', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default withAuth(DashboardPage);
