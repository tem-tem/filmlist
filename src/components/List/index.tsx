import { ListEntry } from '@types'
import React from 'react'

interface Props {
  items: ListEntry[]
}

export const List = ({ items }: Props) => {
  const itemsToRender = items.map((item: ListEntry, i: number) => (
    <div key={`${i}-${item.name}`}>{item.name || item.title}</div>
  ))

  if (items.length === 0) {
    return <div>Items will appear here</div>
  }

  return <div>{itemsToRender}</div>
}
