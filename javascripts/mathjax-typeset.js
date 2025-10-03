function renderMath() {
  if (window.MathJax) {
    MathJax.typesetPromise().catch((err) => console.log("MathJax error: ", err));
  }
}

// Run on first load
document.addEventListener("DOMContentLoaded", renderMath);

// Run on every MkDocs Material page navigation
document$.subscribe(renderMath);





  