import { ListEntry } from '@types'
import React from 'react'
import { ListItem } from '../ListItem'

interface Props {
  items: ListEntry[]
}

export const List = ({ items }: Props) => {
  const itemsToRender = items.map((item: ListEntry) => (
    <ListItem key={item.id} item={item} />
  ))

  return <div>{itemsToRender}</div>
}
