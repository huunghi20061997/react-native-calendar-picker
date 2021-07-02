import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { stylePropType } from './localPropTypes';
import Controls from './Controls';
import Icon from "react-native-vector-icons/FontAwesome5";


export default function YearsHeader(props) {
  const {
    title,
    year,
    maxDate,
    minDate,
    restrictNavigation,
    styles,
    textStyle,
    previousComponent,
    nextComponent,
    previousTitle,
    nextTitle,
    previousTitleStyle,
    nextTitleStyle,
    onYearViewPrevious,
    onYearViewNext,
    headingLevel,
  } = props;

  const disablePrevious = restrictNavigation && minDate && (minDate.year() >= year);
  const disableNext = restrictNavigation && maxDate && (maxDate.year() <= year);

  const accessibilityProps = { accessibilityRole: 'header' };
  if (Platform.OS === 'web') {
    accessibilityProps['aria-level'] = headingLevel;
  }

  return (
    <View style={[{
      flexDirection : 'row',
      paddingBottom : 10,
      borderBottomColor : 'white',
      borderBottomWidth : 0.5
    }]}>
      <TouchableOpacity style = {{
        width : 50,
        height : 40,
        marginLeft : 10,
        justifyContent : 'center',
      }}
      onPress = {onYearViewPrevious}>
        <Icon size = {25}
        name  = {"chevron-left"}
        style = {{
          fontStyle : 'italic'
        }}
        color = {'white'}/>
      </TouchableOpacity>
      <View style={[styles.monthYearHeaderWrapper,{
        flex : 1
      }]}>
        <Text style={[styles.yearsHeaderText,{
          fontSize : 18,
          color : 'white'
        }]} {...accessibilityProps}>
        { title }
        </Text>
      </View>
      <TouchableOpacity style = {{
        width : 50,
        height : 40,
        alignItems : 'flex-end',
        justifyContent : 'center',
        marginRight : 10,
      }}
      onPress = {onYearViewNext}>
        <Icon size = {25}
        name  = {"chevron-right"}
        style = {{
          fontStyle : 'italic'
        }}
        color = {'white'}/>
      </TouchableOpacity>
    </View>
  )

}

YearsHeader.propTypes = {
  styles: stylePropType,
  textStyle: stylePropType,
  title: PropTypes.string,
  onYearViewNext: PropTypes.func,
  onYearViewPrevious: PropTypes.func,
};
