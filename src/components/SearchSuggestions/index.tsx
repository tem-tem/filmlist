import { ListEntry } from '@types'
import React from 'react'

interface Props {
  data?: any[]
}

export const SearchSuggestions = ({ data }: Props) => {
  return (
    <div>
      {data &&
        data.map((item: ListEntry) => (
          <div key={`${item.id}`}>{item.name || item.title}</div>
        ))}
    </div>
  )
}
