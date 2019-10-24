import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ArticleView from './ArticleView/ArticleView';
import Homepage from './Homepage/Homepage';
import LandingPage from './Auth/Landing';
import Signup from './Auth/Signup';
import Login from './Auth/Login';


const RootStack = createStackNavigator(
    {
         Home: Homepage,
         Auth: LandingPage,
         ArticleView: ArticleView,
         Login: Login,
         Signup: Signup
    },

    {
        initialRouteName: 'Auth',
        headerMode: 'none'
    }
)

const AppContainer = createAppContainer(RootStack);

export default AppContainer;