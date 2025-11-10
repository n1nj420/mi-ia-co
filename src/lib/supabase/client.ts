import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para la tabla users
export interface User {
  id: number
  created_at: string
  name: string
  email: string
  role: string
  interests: string
}

// Función para registrar usuario
export async function registerUser(userData: Omit<User, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('users')
    .insert([userData])
    .select()
  
  if (error) {
    console.error('Error registering user:', error)
    return { success: false, error }
  }
  
  return { success: true, data }
}

// Función para obtener todos los usuarios
export async function getUsers() {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching users:', error)
    return { success: false, error }
  }
  
  return { success: true, data }
}
