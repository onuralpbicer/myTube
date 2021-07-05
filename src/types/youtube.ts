export interface YTThumbnail {
	url: string
	width: number
	height: number
}

export interface YTListResponse {
	kind: string
	etag: string
	items: YTVideo[]
	nextPageToken: string
	pageInfo: {
		totalResults: number
		resultsPerPage: number
	}
}

export interface YTVideo {
	kind: string
	etag: string
	id: string
	snippet: {
		publishedAt: string
		channelId: string
		title: string
		description: string
		thumbnails: {
			default: YTThumbnail
			medium: YTThumbnail
			high: YTThumbnail
			standard: YTThumbnail
			maxres: YTThumbnail
		}
		channelTitle: string
		tags: string[]
		categoryId: string
		liveBroadcastContent: string
		defaultLanguage: string
		localized: {
			title: string
			description: string
		}
		defaultAutoLanguage: string
	}
	contentDetails: {
		duration: string
		dimension: string
		definition: string
		caption: string
		licensedContent: boolean
		contentRating: Record<string, never>
		projection: string
	}
	statistics: {
		viewCount: string
		likeCount: string
		dislikeCount: string
		favoriteCount: string
		commentCount: string
	}
}
