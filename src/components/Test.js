export default function Test({src, color}) {
  return (
    <>
    <img src={src} />

    <p style={{color:`${color}`}}>test</p>
    </>
    )
}