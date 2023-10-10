import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dojcargjelxedljsxglb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvamNhcmdqZWx4ZWRsanN4Z2xiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Njk0NzY5MSwiZXhwIjoyMDEyNTIzNjkxfQ.7xBXyC7nmeycWjQ_0qRgFVYFXFoeupQjtc4IDH8nhFA';

export const supabase = createClient(supabaseUrl, supabaseKey);
