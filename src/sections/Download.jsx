import { Element } from "react-scroll";

const Download = () => {
  return <section>
    <Element name="download" className="g7 relativre pb-32 pt-24">
        <div className="container">
            <div className="flex items-center"> 
                <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100 ">
                    <div className="mb-10">
                        <img src="/images/xora.svg"
                        width={160}
                        height={55}
                        alt="xora" />
                    </div>

                    <p className="body-1 mb-10 max-w-md">
                        Try it now for free on iOS, Android, PC, Web - whatever your flavor, we've got you covered.
                    </p>
                </div>
            </div>
        </div>
    </Element>
  </section>;
};

export default Download;
