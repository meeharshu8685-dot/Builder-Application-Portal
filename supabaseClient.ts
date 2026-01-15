import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

console.log('--- Supabase Initialization Check ---');
const mask = (val: string) => val ? `${val.substring(0, 5)}...${val.substring(val.length - 4)}` : 'NULL';
console.log('VITE_SUPABASE_URL:', mask(supabaseUrl));
console.log('VITE_SUPABASE_ANON_KEY (length):', supabaseAnonKey ? supabaseAnonKey.length : 0);

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('MISSING')) {
    console.error('❌ CRITICAL: Supabase credentials are MISSING! Check Vercel Env Vars.');
}

export const supabase = createClient(
    supabaseUrl || 'https://MISSING_URL.supabase.co',
    supabaseAnonKey || 'MISSING_KEY'
);
