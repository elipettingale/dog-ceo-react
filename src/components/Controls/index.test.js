import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Controls from ".";

test('should render breed select', () => {
    render(<Controls />);
    const element = screen.queryByTestId("breedSelect");
    expect(element).toBeInTheDocument();
});

test('should not render subBreed select', () => {
    render(<Controls />);
    const element = screen.queryByTestId("subBreedSelect");
    expect(element).not.toBeInTheDocument();
});

test('should render numberOfImagesSelect select', () => {
    render(<Controls />);
    const element = screen.queryByTestId("numberOfImagesSelect");
    expect(element).toBeInTheDocument();
});
