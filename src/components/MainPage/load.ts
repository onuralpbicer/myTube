import { useQuery, UseQueryResult } from 'react-query'
import { handleErrors } from '../../api/api'
import { YT_API_KEY } from '../../environment'
import { YTListResponse } from '../../types/youtube'

export function usePopularVideos(): UseQueryResult<YTListResponse, Error> {
	const queryFn = () => {
		return fetch(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=AU&key=${YT_API_KEY}`,
			{
				headers: {
					Accept: 'application/json',
				},
			},
		).then((res) => handleErrors<YTListResponse>(res))
	}

	return useQuery({
		queryFn,
		onError: (error: Error) => {
			console.error(error.message)
		},
	})
}
