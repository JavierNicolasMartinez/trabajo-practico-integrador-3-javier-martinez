export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="">
      <p className="">
        &copy; {year} <span className="">Martínez Javier Nicolás</span>
      </p>
      <p className="">TLP 2</p>
    </footer>
  );
};

