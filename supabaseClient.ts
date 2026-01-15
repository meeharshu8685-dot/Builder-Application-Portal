import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('--- Supabase Initialization Check ---');
// Masking logic for safe production logging
const mask = (val: string | undefined) => (val && val.length > 8) ? `${val.substring(0, 5)}...${val.substring(val.length - 4)}` : 'MISSING';

console.log('Detected VITE_SUPABASE_URL:', mask(supabaseUrl));
console.log('Detected Key Length:', supabaseAnonKey ? supabaseAnonKey.length : 0);

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('MISSING')) {
    console.error('❌ CRITICAL ERROR: Supabase credentials are not detected by Vite. Check Vercel Environment Variables.');
}

export const supabase = createClient(
    supabaseUrl || 'https://MISSING_URL.supabase.co',
    supabaseAnonKey || 'MISSING_KEY'
);
