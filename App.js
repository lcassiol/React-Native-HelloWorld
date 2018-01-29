
import { StackNavigator } from 'react-navigation';

import Posts from './src/scenes/posts';
import Profile from './src/scenes/profile';

const App = StackNavigator({
	Posts : { screen : Posts },
	Profile : { screen: Profile }
});


export default App;
