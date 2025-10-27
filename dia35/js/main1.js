  const track = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    let index = 0;

    document.getElementById("next").addEventListener("click", () => {
      index = (index + 1) % totalSlides;
      track.style.transform = `translateX(-${index * 100}%)`;
    });

    document.getElementById("prev").addEventListener("click", () => {
      index = (index - 1 + totalSlides) % totalSlides;
      track.style.transform = `translateX(-${index * 100}%)`;
    });