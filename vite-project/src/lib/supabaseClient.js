import { createClient,  } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import config from './index'

const supabaseUrl = config.supabaseUrl
const supabaseApiKey = config.spabaseApiKey

export const supabase = createClient(supabaseUrl, supabaseApiKey)
