



import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl='https://npeejqggqeovtrbmykea.supabase.co';
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZWVqcWdncWVvdnRyYm15a2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4MTU1ODEsImV4cCI6MjAxNTM5MTU4MX0.OTJ25cak_N6kUXhSWap-dBHsa2crFwWu2bzQarUPplg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})