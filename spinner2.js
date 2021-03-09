const spinner = () => {
  let i = 0;
  (['\r|', '\r/', '\r-', '\r\\', '\r|']).forEach(spin => {
    setTimeout(() => {
      process.stdout.write(spin + '   ');
    }, (100 + (200 * i)));
    i++
  })
};
spinner();
