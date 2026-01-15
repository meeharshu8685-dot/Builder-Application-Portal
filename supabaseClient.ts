import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

console.log('--- Supabase Initialization Debug ---');
console.log('Raw URL:', supabaseUrl ? `"${supabaseUrl}"` : 'EXACTLY_NULL_OR_UNDEFINED');
console.log('Raw Key Length:', supabaseAnonKey ? supabaseAnonKey.length : 0);

if (!supabaseUrl || supabaseUrl.includes('your-project')) {
    console.error('CRITICAL: Supabase URL is missing or still using placeholder!');
}

export const supabase = createClient(
    supabaseUrl || 'https://missing-url.supabase.co',
    supabaseAnonKey || 'missing-key'
);
