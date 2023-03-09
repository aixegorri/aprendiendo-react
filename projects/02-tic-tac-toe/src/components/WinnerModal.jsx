import { Square } from './Square.jsx'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganador'

  return (
    <section className='dialog'>
      <div className='dialog__box'>
        <h2>{winnerText}</h2>

        <article className='win'>
          {winner && <Square>{winner}</Square>}
        </article>

        <footer>
          <button className='btn' onClick={resetGame}>¡Jugar de nuevo!</button>
        </footer>
      </div>
    </section>
  )
}
