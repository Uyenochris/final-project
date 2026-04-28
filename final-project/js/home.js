export function homePage() {
    return `
      <section class="hero">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>Header goes here</h1>
            <h3>Less important text goes here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fugiat aliquid minus nemo sed est.</p>
        <button onclick="loadPage('about')">Read More</button>
          </div>
        </div>
      </section>
  
      <section class="quote">
        <div class="quote-inner">
          <p>
            “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”
          </p>
  
          <h4>John Smith</h4>
          <span>Corporation CEO, books author.</span>
        </div>
      </section>
  
      <section class="events">
        <div class="events-inner">
          <h2>UPCOMING EVENTS:</h2>
          <div class="line"></div>
  
          <div class="events-grid">
          ${event("06", "JUN", "jun06")}
          ${event("30", "JUL", "jul30")}
          ${event("30", "AUG", "aug30")}
          ${event("23", "NOV", "nov23")}
          ${event("23", "DEC", "dec23")}
          </div>
        </div>
      </section>
    `;
  }
  function event(day, month, page) {
    return `
      <div class="event">
        <div class="date" onclick="loadPage('${page}')">
          <h3>${day}</h3>
          <span>${month}</span>
        </div>
  
        <div class="event-text">
          <h4>Sed et perspiciatis unde omnis iste natus</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    `;
  }