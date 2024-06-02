import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  test("renders header, footer, and home page initially", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Assert header, footer, and home page are rendered
    expect(screen.getByRole("banner")).toBeInTheDocument(); // Header
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // Footer
    expect(screen.getByText("Home Page")).toBeInTheDocument(); // Home Page
  });

  test("navigates to details page when a media item is clicked", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Simulate clicking on a media item
    userEvent.click(screen.getByText("Movie Title")); // Replace 'Movie Title' with actual text from your application

    // Assert details page is rendered
    expect(await screen.findByText("Details Page")).toBeInTheDocument(); // Replace 'Details Page' with actual text from your application
  });

  // Add more test cases as needed for other functionality
});
