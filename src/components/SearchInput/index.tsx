import { TextField } from '@material-ui/core'
import { ListEntry } from '@types'
import React, { useCallback, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook'
import { tmdbSearch } from '~/Api'
import useDebounce from '~/hooks/useDebounce'
import { SearchSuggestions } from '../SearchSuggestions'

interface Props {
  add: (item: ListEntry) => void
}

export const SearchInput = ({ add }: Props) => {
  const [query, setQuery] = useState<string>('')
  const debounceQuery = useDebounce(query, 400)
  const [searchResults, searchRequest] = useResource(tmdbSearch)
  const [suggestions, setSuggestions] = useState<ListEntry[]>([])

  useEffect(() => {
    if (searchResults.data && Array.isArray(searchResults.data.results)) {
      setSuggestions(searchResults.data.results)
    }
  }, [searchResults])

  useEffect(() => {
    if (debounceQuery.length > 0) {
      searchRequest(debounceQuery)
    } else {
      setSuggestions([])
    }
  }, [debounceQuery])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // const form = e.target as HTMLFormElement
      // const formData = new FormData(form)
      // const name = formData.get('name')
      // if (typeof name === 'string') {
      //   add({ name })
      // }
      if (suggestions.length > 0) {
        add(suggestions[0])
      }
      setQuery('')
      setSuggestions([])
    },
    [add, suggestions]
  )

  const handleSearch = useCallback((e: any) => {
    setQuery(e.target.value)
  }, [])

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <TextField
        autoFocus
        label='Enter Movie/TV Title'
        fullWidth
        name='name'
        value={query}
        onChange={handleSearch}
      />
      {searchResults.isLoading && <div>loading...</div>}
      {!searchResults.isLoading && <SearchSuggestions data={suggestions} />}
    </form>
  )
}
