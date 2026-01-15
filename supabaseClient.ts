import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

console.log('--- Supabase Initialization Check ---');
console.log('VITE_SUPABASE_URL Length:', supabaseUrl ? supabaseUrl.length : 0);
console.log('VITE_SUPABASE_ANON_KEY Length:', supabaseAnonKey ? supabaseAnonKey.length : 0);

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project') || supabaseUrl.includes('missing-url')) {
    console.error('❌ CRITICAL: Supabase credentials are MISSING or PLACEHOLDER! Submission will fail.');
}

export const supabase = createClient(
    supabaseUrl || 'https://MISSING_URL.supabase.co',
    supabaseAnonKey || 'MISSING_KEY'
);
