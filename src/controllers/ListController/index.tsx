import { ListEntry } from '@types'
import React, { useCallback, useState } from 'react'
import { List } from '~/components/List'
import { SearchInput } from '~/components/SearchInput'

export const ListController = () => {
  const [list, setList] = useState<ListEntry[]>([])

  const addItem = useCallback((item: ListEntry) => {
    setList(rest => [item, ...rest])
  }, [])

  return (
    <div>
      <SearchInput add={addItem} />
      <List items={list} />
    </div>
  )
}
