import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homepage from './Homepage/Homepage';
import ArticleView from './ArticleView/ArticleView';


const RootStack = createStackNavigator(
    {
         Home: Homepage,
         ArticleView: ArticleView
    },

    {
        initialRouteName: 'Home'
    }
)

const AppContainer = createAppContainer(RootStack);

export default AppContainer;