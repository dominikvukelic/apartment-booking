import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Možete logirati greške u vanjski servis za praćenje grešaka
    console.error("Greška u komponenti:", error);
    console.error("Informacije o grešci:", info);
  }

  render() {
    if (this.state.hasError) {
      // Prikazivanje fallback UI-a
      return <h1>Nešto je pošlo po zlu.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
