import { ErrorMessage } from '@hookform/error-message';

interface Props {
  errors: any;
  name: string;
}

const CustonErrorInputMessage = ({ errors, name }: Props, rest: any) => {
  return (
    <ErrorMessage
      {...rest}
      name={name}
      errors={errors}
      render={({ message }) => (
        <p
          style={{ marginTop: '5px', color: '#E73F3F', fontSize: '0.8rem' }}
        >
          {message}
        </p>
      )}
    />
  );
};

export default CustonErrorInputMessage;
