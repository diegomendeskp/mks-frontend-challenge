import GlobalStyles from '@mui/material/GlobalStyles';
export default function GlobalOverride() {
  return (
    <GlobalStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          fontFamily: '"Open Sans", sans-serif',
        },
      }}
    />
  );
}
