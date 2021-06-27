import image from "../images/about-us.jpg"

function AboutUs() {
    return (
      <>
        <div className="d-flex">
          <div className="d-flex-50">
            <img src={image} className="w-100" alt="About-us-photo"></img>
          </div>
          <div className="d-flex-50">
            <h1> Naslov</h1>
            <p>asddklasdnasjkdnaskdnasjkdnaskndasjndansdkasndkasndnaskdnasjkdnaskdnaskdnaskdnkasdnkasdn
              asjkdnaskndkasjdnjaskdnjaskdnasjkndaskjdnasjkndasj</p>
            <button>Dugme koje moze da sluzi a ne mora</button>
          </div>
        </div>
      </>
    );
  }
  
  export default AboutUs;
  