export function blogPage() {
    return `
      <section class="blog">
        <h2>BLOG:</h2>
        <div class="line dark"></div>
  
        <div class="blog-grid">
          ${blogItem("06", "JUN", "jun06", "blog.jpg")}
          ${blogItem("30", "JUL", "jul30", "blog.jpg")}
          ${blogItem("30", "AUG", "aug30", "blog.jpg")}
          ${blogItem("23", "NOV", "nov23", "blog.jpg")}
          ${blogItem("23", "DEC", "dec23", "blog.jpg")}
        </div>
      </section>
    `;
  }
  
  function blogItem(day, month, page, img) {
    return `
      <div class="blog-item" onclick="loadPage('${page}')">
        
        <div class="blog-date">
          <h3>${day}</h3>
          <span>${month}</span>
        </div>
  
        <div class="blog-content">
          <div class="blog-img" style="background-image: url('images/${img}')"></div>
  
          <h4>Sed et perspiciatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
          </p>
        </div>
  
      </div>
    `;
  }







