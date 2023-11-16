import React from 'react';
import { View } from 'react-native';
import map from 'lodash/map';
import get from 'lodash/get';

import FocusText from '@components/FocusText';
import ZoomBounce from '@components/ZoomBounce';

type FocusTextGridProps = {
  textValue: string;
  currentFocusValue: string | null;
  currentIndexFocus: number;
  backgroundSquareColor: string;
  borderSquareColor: string;
};

const FocusTextGrid = (props: FocusTextGridProps) => {
  const {
    textValue,
    currentFocusValue,
    currentIndexFocus,
    backgroundSquareColor,
    borderSquareColor,
  } = props;

  const renderFocusTextItem = (text: string, index: number) => {
    return (
      <View key={`${text}-${index}`} style={{ width: 80, margin: 8 }}>
        <FocusText
          value={get(currentFocusValue, index, null)}
          isFocus={index === currentIndexFocus}
          backgroundColor={backgroundSquareColor}
          borderColor={borderSquareColor}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // backgroundColor: 'green',
        width: '100%',
      }}
    >
      {map(textValue, renderFocusTextItem)}
    </View>
  );
};

export default FocusTextGrid;
