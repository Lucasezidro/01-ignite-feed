import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment ({ content, deleteComment }) {

  function handleDeleteComment () {
    deleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/Lucasezidro.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentAuthorAndTime}>
              <strong>Lucas Ezidro</strong>

              <time title='09 de Abril de 2024' dateTime='2024-04-09 09:00:00'>Cerca de 2h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
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