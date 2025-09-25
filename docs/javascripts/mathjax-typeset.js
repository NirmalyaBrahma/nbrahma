document$.subscribe(() => { 
  // Wait for Material to fully load page content
  MathJax.typesetPromise().catch((err) => console.log(err));
});




  