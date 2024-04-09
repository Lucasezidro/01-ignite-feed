import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment () {

  return (
    <div className={styles.comment}>
      <img src='https://github.com/Lucasezidro.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentAuthorAndTime}>
              <strong>Lucas Ezidro</strong>

              <time title='09 de Abril de 2024' dateTime='2024-04-09 09:00:00'>Cerca de 2h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            Muito bom Devon, parabéns!
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  )
}