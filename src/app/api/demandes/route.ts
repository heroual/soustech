import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message, projectType, address, urgency } = await request.json();

    // Basic validation
    if (!name || !email || !phone || !service || !message || !projectType || !address) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'demandes'), {
      name,
      email,
      phone,
      service,
      message,
      projectType,
      address,
      urgency,
      createdAt: serverTimestamp(),
    });

    return new NextResponse(JSON.stringify({ id: docRef.id }), { status: 201 });
  } catch (error) {
    console.error('Error adding document: ', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
