import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://<Project Ref>.supabase.co';
const supabaseKey = '<Supabase Service Role Secret';

export const supabase = createClient(supabaseUrl, supabaseKey);
