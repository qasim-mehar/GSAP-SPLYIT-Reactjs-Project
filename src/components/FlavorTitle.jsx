function FlavorTitle() {
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16 ">
      <div className="overflow-hidden 2xl-py-0 py-3 first-text-split:">
        <h1>We HAVE 6</h1>
      </div>
      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className=" flavor-text-scroll"
      >
        <div className="bg-mid-brown">
          <h2 className="text-milk pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
            Freaking
          </h2>
        </div>
      </div>
      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delecious flavours</h1>
      </div>
    </div>
  );
}

export default FlavorTitle;
