const SUPABASE_URL = "https://iajjkzphwzkacibkrdhb.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhamprenBod3prYWNpYmtyZGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2Mzg3MjgsImV4cCI6MjEwNzIxNDcyOH0.ATB6rsZCC7nkoIf7IL938POFTUEP-SIM6eyx6dNe9ZQ";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
