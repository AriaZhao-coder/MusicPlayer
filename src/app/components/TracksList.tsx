import { TrackListItem } from './TrackListItem'
import { FlatList, FlatListProps, Text, View } from 'react-native'
import library from '@/assets/data/library.json'

export type TracksListProps = Partial<FlatListProps<unknown>>
export const TrackList = ({...flatlistProps}: TracksListProps) => {
	return (
		<FlatList
			data={library}
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
	
