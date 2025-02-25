import { TrackListItem } from './TrackListItem'
import { FlatList, FlatListProps,View } from 'react-native'
import { utilsStyles } from '@/styles'
import { Track } from 'react-native-track-player'

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[]
}

const ItemDivider = () => (
	<View style={{...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60}}/>
)
export const TrackList = ({tracks, ...flatlistProps}: TracksListProps) => {
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop:10, paddingBottom: 128}}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track}) => (
				<TrackListItem
					track={track}
				/>
			)}
			{...flatlistProps}
		/>
	)
}
	
