import { render } from "@testing-library/react";
import CatFacts from "../components/CatFacts";

describe("CatFacts", () => {
  const catFacts = [
    {
      "_id": "58e008800aac31001185ed07",
      "text": "Wikipedia has a recording of a cat meowing, because why not?",
    },
    {
      "_id": "58e008630aac31001185ed01",
      "text": "When cats grimace, they are usually \"taste-scenting.\" They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.",
    },
    {
      "_id": "58e00a090aac31001185ed16",
      "text": "Cats make more than 100 different sounds whereas dogs make around 10.",
    },
    {
      "_id": "58e009390aac31001185ed10",
      "text": "Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.",

      "used": false
    },
    {

      "_id": "58e008780aac31001185ed05",
      "text": "Owning a cat can reduce the risk of stroke and heart attack by a third.",

    }
  ]

  test("renders correctly", () => {
    const { asFragment } = render(<CatFacts catfacts={catFacts} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
