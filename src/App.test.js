import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArtCollection from "./components/Home/ArtCollection/ArtCollection";

import SearchBox from "./components/Home/SearchBox/SearchBox";
import CollectionContainer from "./components/Home/CollectionContainer/CollectionContainer";

test('renders "no data" when there are no collections', () => {
  render(<CollectionContainer data={[]} />);
  expect(screen.getByText(/No result found/i)).toBeInTheDocument();
});

test("renders collections", () => {
  const fakeData = [
    {
      id: 1,
      title: "Bob",
      thumbnail: {
        lqip: "sasas",
        alt_text: "alt",
      },
      date_display: "2033",
      place_of_origin: "ogun",
    },
    {
      id: 2,
      title: "Marcy",
      thumbnail: {
        lqip: "sasas",
        alt_text: "alt",
      },
      date_display: "2033",
      place_of_origin: "ogun",
    },
  ];
  render(
    <Router>
      {" "}
      <CollectionContainer data={fakeData} />
    </Router>
  );
  const collectionTitle = screen
    ?.getAllByTestId("collection-title")
    .map((li) => li.textContent);
  const fakeTitle = fakeData.map((c) => c.title);

  expect(collectionTitle).toEqual(fakeTitle);
});

describe("Input", () => {
  test("renders Input component", () => {
    render(<ArtCollection />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});

describe("Input value", () => {
  it("updates on change", () => {
    const handleChange = jest.fn((value) => {});

    render(<SearchBox handleChange={handleChange} />);

    const searchInput = screen.queryByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
