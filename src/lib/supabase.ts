import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://telexwiwddttpfkdgmmo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlbGV4d2l3ZGR0dHBma2RnbW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3NzgwODQsImV4cCI6MjAzMTM1NDA4NH0.gwba7lzO_nWD2zCb4Ex0WFF_ToCGmNhffl33E-7MZjo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})