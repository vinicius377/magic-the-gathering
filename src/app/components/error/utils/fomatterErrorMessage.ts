export function formatterErrorMessage(error: string) {

  switch(error) {
    case 'not-found':
      return "Não encontrado.";
    default:
      return 'Ocorreu um erro inesperado, por favor tente novamente.'
  }
}
