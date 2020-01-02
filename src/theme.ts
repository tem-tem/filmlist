import { createMuiTheme } from '@material-ui/core'

export const colors = {
  bg: '#eeeeee',
}

export const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: colors.bg,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 22,
        paddingLeft: 22,
        marginBottom: 20,
        borderRadius: 5,
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow:
          '3px 3px 3px rgba(0,0,0, 0.14), -3px -3px 3px rgba(255,255,255,0.78)',
      },
    },
  },
})
