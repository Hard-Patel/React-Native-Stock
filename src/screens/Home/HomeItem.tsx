import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {HomeItemProp} from 'interface';
import {useNavigation} from '@react-navigation/native';
import {fontFamily, useAppTheme} from 'theme';

interface Props {
  item: HomeItemProp;
  index: number;
}

const HomeItem = (props: Props) => {
  const {item, index} = props;
  const navigation = useNavigation();
  const theme = useAppTheme();

  const handleStockPress = () => {
    console.log('Stock Pressed');
    navigation.navigate('Details', {
      company_name: item['company_name'],
      currency: item['currency'],
      label: item['label'],
      last_price: item['last_price'],
    });
  };

  return (
    <Pressable onPress={handleStockPress}>
      <View
        style={[
          styles.homeListItemStyle,
          {backgroundColor: theme.colors.backgroundColor[700]},
        ]}
        key={`Stock ${item.label} ${index}`}>
        <View>
          <Text style={styles.companyNameStyle}>{item['company_name']}</Text>
        </View>
        <View style={styles.companyStatsViewStyle}>
          <Text style={styles.companyLabelStyle}>
            <Text
              style={
                styles.companyTradePriceTextStyle
              }>{`${item['last_price']} `}</Text>
            {`${item['currency']}`}
          </Text>
          <Text style={styles.companyLabelStyle}>{item['label']}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default HomeItem;
