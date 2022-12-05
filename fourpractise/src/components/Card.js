

function Card({details}) {
  return (
    <div class="card" style={{width: "18rem"}}>
  <img src={details.picture?.larrge} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{details.name?.first}-{details.phone}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary"></a>
  </div>
</div>
  )
}

export default Card
  