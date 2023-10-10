import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dojcargjelxedljsxglb.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvamNhcmdqZWx4ZWRsanN4Z2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NDc2OTEsImV4cCI6MjAxMjUyMzY5MX0.RcfTJG8iEvgNFPrQj1PefFUZvZnmyi91lcif4KHB3LA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
