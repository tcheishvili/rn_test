import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

import {Item} from '../../types/Item';
import Arrow from '../../../assets/Arrow';

import styles from './styles';

interface Props {
  item: Item;
  onPress?: () => void;
}

const Card: FC<Props> = ({item, onPress = () => {}}) => {
  return (
    <View style={styles.card} testID="card">
      <View style={styles.wrapper}>
        <Text style={styles.name} numberOfLines={1}>
          {item.data.title}
        </Text>
        <Text style={styles.author}>Posted By: {item.data.author}</Text>
        {item.data.media && item.data.is_video ? (
          <View style={styles.videoContainer} testID="video-container">
            <Video
              source={{uri: item.data.media?.reddit_video.scrubber_media_url}}
              rate={1.0}
              volume={1.0}
              controls={true}
              resizeMode="contain"
              style={styles.video}
            />
          </View>
        ) : (
          <View
            style={[
              styles.textContainer,
              item.data.selftext ? styles.marginTop : {},
            ]}>
            <Text>{item.data.selftext}</Text>
          </View>
        )}
        <View style={styles.info}>
          <View style={styles.subinfo}>
            <View>
              <Text>{item.data.num_comments}</Text>
              <Text style={styles.title}>Comment</Text>
            </View>
            <View style={styles.vote}>
              <Text>{item.data.ups}</Text>
              <Text style={styles.title}>Vote</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.vote}
            onPress={onPress}
            testID="button">
            <Arrow />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
