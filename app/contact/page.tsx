"use client"
import Section from '../../components/Section'
import { useForm } from 'react-hook-form'

export default function ContactPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log('Form data:', data)
    alert('Form submitted! (Connect to your backend or email service)')
  }

  return (
    <Section>
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input {...register('name', { required: true })} className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input {...register('email', { required: true })} type="email" className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea {...register('message', { required: true })} rows={5} className="w-full px-3 py-2 border rounded" />
          </div>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Send</button>
        </form>
      </div>
    </Section>
  )
}
