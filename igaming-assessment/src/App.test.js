import { render, screen } from '@testing-library/react';
import App from './App';
import RemovableChip from './components/RemovableChip';
import Card from './components/Card';
import DropDownMenu from './components/Form/DropDownMenu';

test("Example 1 renders successfully", () => {
  render(<App/>);

  const element = screen.getByText(/Here are some Automations that pre-defined for product availability monitoring/i);

  expect(element).toBeInTheDocument();
})

test("Example 2 renders successfully", () => {
  render(<Card title="title1" shortDescription="shortDescription1" image_path="/images/linkedin.png" slug="1234" />);
  const element = screen.getByText(/shortDescription1/i);

  expect(element).toBeInTheDocument();
})

test("Example 3 renders successfully", () => {
  render(<RemovableChip text="removable chip1" removeChip={()=>{}} />);
  const element = screen.getByText(/removable chip1/i);

  expect(element).toBeInTheDocument();
})

const mock_data = [
  {
    text: "item1",
    slug: "google",
    type: ""
  },
  {
    text: "item2",
    slug: "google",
    type: ""
  },
  {
    text: "item3",
    slug: "google",
    type: ""
  },
]

test("Example 4 renders successfully", () => {
  render(<DropDownMenu list={mock_data} handleClick={()=>{}} />);
  const element = screen.getByText(/item3/i);

  expect(element).toBeInTheDocument();
})
