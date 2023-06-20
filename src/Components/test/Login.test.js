import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login/Login';

describe('Login Component', () => {
  const mockOnLogin = jest.fn();

  test('renders sign-in form initially', () => {
    render(<Login onLogin={mockOnLogin} />);

    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  test('renders sign-up form on sign-up button click', () => {
    render(<Login onLogin={mockOnLogin} />);

    fireEvent.click(screen.getByText('Sign Up'));

    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('User')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('calls onLogin with email on sign-in form submission', () => {
    render(<Login onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });

    fireEvent.submit(screen.getByText('Sign In'));

    expect(mockOnLogin).toHaveBeenCalledTimes(1);
    expect(mockOnLogin).toHaveBeenCalledWith('test@example.com');
  });

  test('calls onLogin with email on sign-in button click', () => {
    render(<Login onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });

    fireEvent.click(screen.getByText('Sign In'));

    expect(mockOnLogin).toHaveBeenCalledTimes(1);
    expect(mockOnLogin).toHaveBeenCalledWith('test@example.com');
  });

  test('calls onLogin with email on Google login', () => {
    render(<Login onLogin={mockOnLogin} />);

    const decodedToken = {
      name: 'John Doe',
      email: 'johndoe@example.com',
    };

    global.localStorage.setItem('isAuthenticated', 'true');
    global.localStorage.setItem('email', decodedToken.email);
    global.localStorage.setItem('name', decodedToken.name);

    const credentialResponse = { credential: 'mocked_token' };
    screen.getByTestId('google-login-button').onclick(credentialResponse);

    expect(mockOnLogin).toHaveBeenCalledTimes(1);
    expect(mockOnLogin).toHaveBeenCalledWith(decodedToken.email);
  });
});
