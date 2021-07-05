import { useQuery, UseQueryResult } from 'react-query'
import { handleErrors } from '../../api/api'
import { YT_API_KEY } from '../../environment'
import { YTListResponse } from '../../types/youtube'

export function useRelatedVideos(
	videoID: string,
): UseQueryResult<YTListResponse, Error> {
	const queryFn = () => {
		return fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=${YT_API_KEY}&maxResults=10`,
			{
				headers: {
					Accept: 'application/json',
				},
			},
		).then((res) => handleErrors<YTListResponse>(res))
	}

	return useQuery({
		queryFn,
		enabled: !!videoID,
		queryKey: ['Get Related Videos', videoID],
		onError: (error: Error) => {
			console.error(error.message)
		},
	})
}
