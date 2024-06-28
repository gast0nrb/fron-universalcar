const Dondefragment = ({ url }) => {
  return (
    <iframe
      className="mx-auto w-10/12"
      src={url}
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
)
};

export default Dondefragment;
