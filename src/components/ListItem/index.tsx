import { Card, Typography } from '@material-ui/core'
import { ListEntry } from '@types'
import React from 'react'

interface Props {
  item: ListEntry
}

export const ListItem = ({ item }: Props) => {
  return (
    <Card>
      {/* <CardContent> */}
      <Typography color='textSecondary' gutterBottom>
        {item.media_type}
      </Typography>
      <Typography variant='h5'>{item.name || item.title}</Typography>
      <Typography color='textSecondary' gutterBottom>
        {item.original_name || item.original_title}
      </Typography>
      {/* </CardContent> */}
    </Card>
  )
}
