import { FallingLines } from 'react-loader-spinner';
import { PositionLoader } from './Loader.styled';

export const Loader =() => {
    return (
        <PositionLoader>
<FallingLines
  color="#c2ebfa"
  width="200"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
        </PositionLoader>
    )
}