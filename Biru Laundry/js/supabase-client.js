// js/supabase-client.js
//
// File ini SATU-SATUNYA tempat kita nyimpen koneksi ke Supabase.
// Semua halaman lain tinggal <script src="js/supabase-client.js"></script>
// dan otomatis punya akses ke variabel `supabase` di bawah ini.

// 1) Ganti dua nilai di bawah ini sesuai punya kamu (dari Project Settings > API)
const SUPABASE_URL = 'https://vpokvixywsclymhushvf.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_A8EFmTWFsuM9CZYh9NdzmA_QPxhIzvt';

// 2) Ini yang bikin objek `supabase` yang kita pakai di semua halaman
//    untuk query database, auth, dsb.
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
