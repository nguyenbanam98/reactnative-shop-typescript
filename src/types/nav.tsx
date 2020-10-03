import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Product } from '../datas/DataProduct';

type RootStackParamList = {
    Cart: { dataCart: Product[] };

};

type CartScreenRouteProp = RouteProp<RootStackParamList, 'Cart'>;

type CartScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Cart'
>;

type Props = {
    route: CartScreenRouteProp;
    navigation: CartScreenNavigationProp;
};

export { CartScreenRouteProp }