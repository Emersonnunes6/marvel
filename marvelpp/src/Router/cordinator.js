export const onClickPersonagem = (history, inputPersonagem) => {
  history.push(`/${inputPersonagem}`)
  }

export const onClickInicio = (history) => {
  history.push('/')
}

export const onClickComics = (id, history) => {
  history.push(`/${id}/comics`)
}