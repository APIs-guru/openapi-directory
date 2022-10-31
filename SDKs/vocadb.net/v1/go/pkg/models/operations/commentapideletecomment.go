package operations

type CommentAPIDeleteCommentEntryTypeEnum string

const (
	CommentAPIDeleteCommentEntryTypeEnumUndefined          CommentAPIDeleteCommentEntryTypeEnum = "Undefined"
	CommentAPIDeleteCommentEntryTypeEnumAlbum              CommentAPIDeleteCommentEntryTypeEnum = "Album"
	CommentAPIDeleteCommentEntryTypeEnumArtist             CommentAPIDeleteCommentEntryTypeEnum = "Artist"
	CommentAPIDeleteCommentEntryTypeEnumDiscussionTopic    CommentAPIDeleteCommentEntryTypeEnum = "DiscussionTopic"
	CommentAPIDeleteCommentEntryTypeEnumPv                 CommentAPIDeleteCommentEntryTypeEnum = "PV"
	CommentAPIDeleteCommentEntryTypeEnumReleaseEvent       CommentAPIDeleteCommentEntryTypeEnum = "ReleaseEvent"
	CommentAPIDeleteCommentEntryTypeEnumReleaseEventSeries CommentAPIDeleteCommentEntryTypeEnum = "ReleaseEventSeries"
	CommentAPIDeleteCommentEntryTypeEnumSong               CommentAPIDeleteCommentEntryTypeEnum = "Song"
	CommentAPIDeleteCommentEntryTypeEnumSongList           CommentAPIDeleteCommentEntryTypeEnum = "SongList"
	CommentAPIDeleteCommentEntryTypeEnumTag                CommentAPIDeleteCommentEntryTypeEnum = "Tag"
	CommentAPIDeleteCommentEntryTypeEnumUser               CommentAPIDeleteCommentEntryTypeEnum = "User"
	CommentAPIDeleteCommentEntryTypeEnumVenue              CommentAPIDeleteCommentEntryTypeEnum = "Venue"
)

type CommentAPIDeleteCommentPathParams struct {
	CommentID int32                                `pathParam:"style=simple,explode=false,name=commentId"`
	EntryType CommentAPIDeleteCommentEntryTypeEnum `pathParam:"style=simple,explode=false,name=entryType"`
}

type CommentAPIDeleteCommentRequest struct {
	PathParams CommentAPIDeleteCommentPathParams
}

type CommentAPIDeleteCommentResponse struct {
	ContentType string
	StatusCode  int64
}
