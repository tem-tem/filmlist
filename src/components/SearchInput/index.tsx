import { TextField } from '@material-ui/core'
import { ListEntry } from '@types'
import React, { useCallback } from 'react'

interface Props {
  add: (item: ListEntry) => void
}

export const SearchInput = ({ add }: Props) => {
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      const name = formData.get('name')
      if (typeof name === 'string') {
        add({ name })
      }
      form.reset()
    },
    [add]
  )

  return (
    <form onSubmit={handleSubmit}>
      <TextField autoFocus label='Enter Movie/TV Title' fullWidth name='name' />
    </form>
  )
}
