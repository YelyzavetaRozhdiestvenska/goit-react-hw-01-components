import { Profile } from "./profile/Profile";
import GlobalStyle from './globalStyle';
import userItems from "../user.json"

export const App = () => {
  return (
  <div>
      <Profile items={userItems}/>
      <GlobalStyle />
    </div>
  );
};
