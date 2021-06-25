import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';
import Icon from "react-native-vector-icons/FontAwesome5";
 

export default function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    onPressMonth,
    onPressYear,
    months,
    previousComponent,
    nextComponent,
    previousTitle,
    nextTitle,
    previousTitleStyle,
    nextTitleStyle,
    monthTitleStyle,
    yearTitleStyle,
    textStyle,
    restrictMonthNavigation,
    maxDate,
    minDate,
    headingLevel,
    monthYearHeaderWrapperStyle,
    headerWrapperStyle
  } = props;
  const MONTHS = months || Utils.MONTHS; // English Month Array
  const monthName = MONTHS[currentMonth];
  const year = currentYear;

  const disablePreviousMonth = restrictMonthNavigation && Utils.isSameMonthAndYear(minDate, currentMonth, currentYear);
  const disableNextMonth = restrictMonthNavigation && Utils.isSameMonthAndYear(maxDate, currentMonth, currentYear);

  const accessibilityProps = { accessibilityRole: 'header' };
  if (Platform.OS === 'web') {
    accessibilityProps['aria-level'] = headingLevel;
  }

  return (
    <View style={[{
      flexDirection : 'row',
    }]}>
      <TouchableOpacity style = {{
        width : 50,
        height : 40,
        marginLeft : 10,
        justifyContent : 'center',
      }}
      onPress = {onPressPrevious}>
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
        <TouchableOpacity disabled = {false} activeOpacity = {1}>
          <Text style={[styles.monthHeaderMainText, textStyle, monthTitleStyle,{
            fontWeight : 'bold',
            fontSize : 20,
            color : 'white'
          }]} {...accessibilityProps}>
            { monthName }
          </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled = {false} activeOpacity = {1}>
          <Text style={[styles.yearHeaderMainText, textStyle, yearTitleStyle,{
            fontWeight : 'bold',
            fontSize : 20,
            color : 'white'
          }]}>
            { 'năm '+year }
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style = {{
        width : 50,
        height : 40,
        alignItems : 'flex-end',
        justifyContent : 'center',
        marginRight : 10,
      }}
      onPress = {onPressNext}>
        <Icon size = {25}
        name  = {"chevron-right"}
        style = {{
          fontStyle : 'italic'
        }}
        color = {'white'}/>
      </TouchableOpacity>
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
  onPressMonth: PropTypes.func,
  onPressYear: PropTypes.func,
};
