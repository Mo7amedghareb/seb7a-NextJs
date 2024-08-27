export default function Home() {
  return (
      <>
      <div>
          <mybutton/>
      </div>
      <div style={{backgroundImage: `url(${'imageh.jpg'})`, backgroundSize:'cover'}}>
      <title>Home</title>


          <div id="homediv">
              
              <div class="moamen">
                  <h2>
                      الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
                  </h2>
                  <ul>
                      <li><a href="/Alsba7">أذكار الصباح</a></li>
                      <li><a href="/Almsaa">أذكار المساء</a></li>
                      <li><a style={{marginBottom:'140px'}} href="/sebha">السبحه</a></li>
                  </ul>
              </div>
          </div>
      </div>
          
      </>
  )
}