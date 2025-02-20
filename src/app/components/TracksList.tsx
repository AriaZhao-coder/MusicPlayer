import { TrackListItem } from './TrackListItem'
import { FlatList, FlatListProps,View } from 'react-native'
import { utilsStyles } from '@/styles'

export type TracksListProps = Partial<FlatListProps<unknown>> & {
	tracks: any[]
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
					track={{
						...track,
						image: track.artwork
					}}
				/>
			)}
			{...flatlistProps}
		/>
	)
}
	
