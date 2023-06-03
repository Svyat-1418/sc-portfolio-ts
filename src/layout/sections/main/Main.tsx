import mainPhoto from '../../../assets/images/mainPhoto.jpg'
export const Main = () => {
  return (
    <section className="home" id="home">
      <div>
        <img src={mainPhoto} alt="My photo" />
        <h3>svyatoslav nemkovich</h3>
        <p>i am a front-end developer</p>
        <a href="#">download CV</a>
      </div>
    </section>
  )
}
