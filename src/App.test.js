import { render, screen, within } from "@testing-library/react";
import App from "./App";

function getWorkItem(companyName) {
  const heading = screen.getByRole("heading", { name: companyName });
  return heading.closest(".row.item");
}

test("renders updated current resume headline and role summary", () => {
  render(<App />);

  expect(
    screen.getByText(/DevOps Lead \| Platform Engineer \| Director of Engineering \| AWS, Terraform, CI\/CD/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/currently DevOps Lead at Convo Communications/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/ReefMind LLC and Miller Mind Solutions Inc\./i)).toBeInTheDocument();
  expect(screen.getByText(/individual contributor supporting Frontera Software’s AWS infrastructure/i)).toBeInTheDocument();
});

test("renders work timeline dates as month and year", () => {
  render(<App />);

  expect(within(getWorkItem("Convo Communications")).getByText(/DevOps Lead/i)).toBeInTheDocument();
  expect(within(getWorkItem("Convo Communications")).getByText(/Jun 2024 to Present/i)).toBeInTheDocument();

  expect(within(getWorkItem("ReefMind LLC")).getByText(/Director of Engineering/i)).toBeInTheDocument();
  expect(within(getWorkItem("ReefMind LLC")).getByText(/May 2026 to Present/i)).toBeInTheDocument();

  expect(within(getWorkItem("Miller Mind Solutions Inc.")).getByText(/Director of Engineering/i)).toBeInTheDocument();
  expect(within(getWorkItem("Miller Mind Solutions Inc.")).getByText(/May 2026 to Present/i)).toBeInTheDocument();

  expect(within(getWorkItem("Frontera Software")).getByText(/DevOps Engineer \(Contract\)/i)).toBeInTheDocument();
  expect(screen.getAllByRole("heading", { name: /Frontera/i })).toHaveLength(1);
  expect(within(getWorkItem("Frontera Software")).getByText(/Sep 2024 to Present/i)).toBeInTheDocument();
  expect(
    within(getWorkItem("Frontera Software")).getByText(/individual contributor supporting AWS infrastructure/i)
  ).toBeInTheDocument();

  expect(within(getWorkItem("EITR Technologies, LLC")).getByText(/Platform Engineer/i)).toBeInTheDocument();
  expect(within(getWorkItem("EITR Technologies, LLC")).getByText(/Dec 2022 to May 2024/i)).toBeInTheDocument();
});

test("does not render day-specific dates on resume timeline", () => {
  render(<App />);
  expect(screen.queryByText(/Jun 17/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/May 22/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/May 31/i)).not.toBeInTheDocument();
});
