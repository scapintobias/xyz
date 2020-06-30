import React from "react";
import CN from "classnames";

export const Image = props => (
  <section className="pa3">
    <img src={props.src} alt={props.alt} />
  </section>
);

export const Desc = ({ className, children }) => (
  <section className="flex justify-center flex-column-l flex-column-t flex-column-m mv3 mh3-m mh4-t mh5-l">
    <section
      className={CN(
        "w-50 w-100-m w-100-l w-100-t f27 f3-m minion lh-solid",
        className
      )}
    >
      {children}
    </section>
  </section>
);

export const Iltr = props => (
  <section className="flex flex-column-m flex-column-t">
    <div className="w-50 w-100-m w-100-t pa3">
      <img src={props.src} alt={props.alt} />
    </div>
    <div className="flex flex-column w-50 w-100-t w-100-m">
      <p className="f4 ph3 pt3 minion silver lh-solid">{props.par1}</p>
      <p className="f3 pa3 helvetica silver lh-solid">{props.tit1}</p>
      <p className="f4 ph3 minion silver lh-solid">{props.par2}</p>
      <p className="f3 pa3 helvetica silver lh-solid">{props.tit2}</p>
      <p className="f4 ph3 pb3 minion silver lh-solid">{props.par3}</p>
    </div>
  </section>
);
