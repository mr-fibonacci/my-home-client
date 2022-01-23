import { NextPage } from "next";
import { FlexGrowLayout } from "../components/Layouts/Layouts";

const AboutUs: NextPage = () => {
  return (
    <FlexGrowLayout>
      <h1 id="about">About us:</h1>
      <p>
        Hello there! You may be wondering who we are. Well, glad you asked.
        We're a dev team with nothing to lose. In the world where the basic
        population slaves their lives away for a rent on a place that isn’t even
        remotely good or even worse, is stuck paying a mortgage for the next 45
        years, we decided to join the bad guys. This means the property owners
        and the banks are our potential customers. But there’s nothing to be
        worried about! You’ll own nothing and you’ll be happy!
      </p>
      <h1 id="terms">Terms and conditions:</h1>
      <p>
        As I’ve just built this web application and am currently suffering from
        the God complex, all the user interaction shall take place on my terms
        and my terms only. As I require to be in full control of the situation,
        it is understood that all visitors to this website renounce any human
        rights. Please note that in an event of war, the Geneva Convention will
        not be respected. Any attempt to click away from the website shall be
        viewed as treason and treated accordingly. This includes being shot at
        with a rifle and having prerecorded obscenities played back at full
        volume. As a good will gesture, to show that I can be kind and merciful,
        the very few survivors will be thrown into gulags and North Korean
        reeducation camps as an opportunity to repent and redeem their worthless
        souls.
      </p>
      <h1 id="privacy">Privacy:</h1>
      <p>
        There is no privacy. The internet as we know it is dead. Has been for a
        very long time. So, not to stand out from our competitors, we’re
        tracking all the online activity by you, your wife, your kids and even
        your dog. No one you care about has been spared. Not to mention that
        we’ve hacked your hardware and are mining bitcoin and all the other
        crypto currencies known to man. All the harvested data shall be nicely
        packaged, wrapped in Xmas wrapping paper and sold to the highest bidder.
        If you’re interested, let us know at the following email address.
      </p>
      <h1 id="security">Security:</h1>
      <p>
        All the data is nicely encrypted. Of course, we didn’t have any of our
        users in mind. The only thing we care about is that the data
        meticulously collected is not in any way shape or form compromised by
        our competitors if intercepted. This way we’re the only ones who can
        profit off of our beloved users’ gullibility. Our shareholders wouldn’t
        like it too much if we handled all the user data in a way that would
        jeopardize our morally dubious operation.
      </p>
    </FlexGrowLayout>
  );
};

export default AboutUs;
