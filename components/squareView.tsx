import React from 'react';
import {View} from 'react-native';

interface SquareViewProps {
    size?: number; // Size for width and height (default 96 units)
    borderWidth?: number; // Border width (default 2 units)
    borderColor?: string; // Border color (default red)
    backgroundColor?: string; // Background color (default blue)
}

const SquareView: React.FC<SquareViewProps> = ({
                                                   size = 96, // Default size is 96 units
                                                   borderWidth = 2, // Default border width
                                                   borderColor = 'red-500', // Default border color
                                                   backgroundColor = 'blue-500', // Default background color
                                               }) => {
    return (
        <View
            className={`bg-${backgroundColor} border-${borderWidth} border-${borderColor}`}
            style={{width: size, height: size}}
        />
    );
};

export default SquareView;
