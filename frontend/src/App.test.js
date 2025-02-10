import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Counter from './Counter';

// App 組件的測試
describe('App Component', () => {
  test('renders Counter component', () => {
    render(<App />);
    expect(screen.getByText(/Counter:/i)).toBeInTheDocument();
  });
});

// Counter 組件的測試
describe('Counter Component', () => {
  // 測試初始渲染
  test('renders initial counter value and button', () => {
    render(<Counter />);

    // 檢查計數器初始值
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();

    // 檢查按鈕存在
    const button = screen.getByRole('button', { name: /increase/i });
    expect(button).toBeInTheDocument();
  });

  // 測試點擊按鈕增加計數
  test('increases counter value when button is clicked', async () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increase/i });

    // 點擊按鈕
    await userEvent.click(button);
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();

    // 再次點擊
    await userEvent.click(button);
    expect(screen.getByText(/Counter: 2/i)).toBeInTheDocument();
  });

  // 測試多次點擊
  test('handles multiple clicks correctly', async () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increase/i });

    // 連續點擊三次
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    expect(screen.getByText(/Counter: 3/i)).toBeInTheDocument();
  });

  // 測試可訪問性
  test('has accessible button', () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increase/i });

    // 確保按鈕可以被鍵盤操作
    expect(button).toHaveFocus();

    // 確保按鈕有正確的 ARIA 標籤
    expect(button).toHaveAccessibleName();
  });
});