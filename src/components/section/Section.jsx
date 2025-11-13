const Section = ({ className = "", children }) => (
  <section className={`px-5 py-18 md:px-15 desktop:px-0 ${className}`}>
    {children}
  </section>
);
export default Section;
