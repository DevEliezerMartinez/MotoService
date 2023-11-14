



import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl='https://zewrhvhpkjnityplljea.supabase.co';
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpld3Jodmhwa2puaXR5cGxsamVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MjUwMjksImV4cCI6MjAxNTMwMTAyOX0.n-kMrUz1JXMMrnt2dg5A4vaximnxc3PnfsyxiUG82Hg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})