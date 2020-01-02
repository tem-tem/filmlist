import { TmdbSearchResults } from '@types'
import { request } from 'react-request-hook'

export const tmdbSearch = (query: string) => {
  return request<TmdbSearchResults>({
    params: { query },
    url: '/search/multi',
  })
}
