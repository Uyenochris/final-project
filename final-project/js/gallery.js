export function galleryPage() {
    return `
      <section class="gallery">
        <div class="gallery-inner">
          <h2>GALLERY:</h2>
          <div class="line dark"></div>
  
          <div class="gallery-grid">
  
            <!-- 1 WIDE -->
            <div class="gallery-item wide"
                 style="background-image: url('../images/1.png')"
                 onclick="loadPage('food')">
              <div class="overlay yellow"></div>
            </div>
  
            <!-- 2 pink -->
          <div class="gallery-item pink-box"
     style="background-image: url('../images/2.jpeg')"
     onclick="loadPage('dj')">
  <div class="overlay pink"></div>
</div>
  
            <!-- 3 green -->
            <div class="gallery-item green-box"
                 style="background-image: url('../images/3.jpg')"
                 onclick="loadPage('speech')">
              <div class="overlay green"></div>
            </div>
  
            <!-- 4 big -->
            <div class="gallery-item big"
                 style="background-image: url('../images/4.jpg')"
                 onclick="loadPage('openfood')">
              <div class="overlay purple"></div>
            </div>
  
            <!-- 5 talll -->
            <div class="gallery-item tall"
                 style="background-image: url('../images/5.png')"
                 onclick="loadPage('international')">
              <div class="overlay teal"></div>
            </div>
  
          </div>
        </div>
      </section>
    `;
  }


