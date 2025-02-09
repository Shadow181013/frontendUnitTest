import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter heading and Increase button', () => {
  render(<App />);

  // 檢查 Counter 標題是否正確渲染
  const counterHeading = screen.getByText(/Counter: 0/i);
  expect(counterHeading).toBeInTheDocument();

  // 檢查 Increase 按鈕是否正確渲染
  const increaseButton = screen.getByText(/Increase/i);
  expect(increaseButton).toBeInTheDocument();
});
