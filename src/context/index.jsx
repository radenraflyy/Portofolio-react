import DarkModeContext from './DarkModeContext';

function index({ children }) {
  return (
    <DarkModeContext>
        {children}
    </DarkModeContext>
  )
}

export default index;