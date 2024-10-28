import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
const FeatureList = [
  {
    title: "Reactive Data Binding",
    Svg: require("@site/static/img/logo_for_reactive_data_binding.png").default,
    description: (
      <>
        LumeoJS automatically updates HTML elements whenever your data changes,
        providing a smooth and reactive user experience.
      </>
    ),
  },
  {
    title: "Simple Syntax",
    Svg: require("@site/static/img/simple.png").default,
    description: (
      <>
        LumeoJS uses an intuitive syntax that makes it easy to bind variables,
        set up event handlers, and create dynamic content in your web
        applications.
      </>
    ),
  },
  {
    title: "Flexible Event Handling",
    Svg: require("@site/static/img/event_handling.png").default,
    description: (
      <>
        Bind event handlers directly in HTML with ease, making interactivity
        straightforward and allowing you to handle user actions effortlessly.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
