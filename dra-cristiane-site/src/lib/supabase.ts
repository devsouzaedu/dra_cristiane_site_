import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtokfoeastdyvcmqnpme.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10b2tmb2Vhc3RkeXZjbXFucG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2ODMwMTksImV4cCI6MjA1OTI1OTAxOX0.5XzbGBGUgall6QWPlURvZruQeRLb8TWMsDbXnmPTerM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 