import { Component, ReactNode, ReactElement } from 'react';
import Alert from '@mui/material/Alert';

export type ErrorBoundaryProps = {
  children: ReactElement | ReactElement[];
};
export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    hasError: false,
  };

  componentDidCatch(): void {
    this.setState({
      hasError: true,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Alert severity="error">
          Something went wrong! Unfortunately, I also think that it is not a good message :(
        </Alert>
      );
    }

    return this.props.children;
  }
}
