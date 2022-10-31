package operations




type UserAPIPostRefreshEntryEditEntryTypeEnum string

const (
    UserAPIPostRefreshEntryEditEntryTypeEnumUndefined UserAPIPostRefreshEntryEditEntryTypeEnum = "Undefined"
UserAPIPostRefreshEntryEditEntryTypeEnumAlbum UserAPIPostRefreshEntryEditEntryTypeEnum = "Album"
UserAPIPostRefreshEntryEditEntryTypeEnumArtist UserAPIPostRefreshEntryEditEntryTypeEnum = "Artist"
UserAPIPostRefreshEntryEditEntryTypeEnumDiscussionTopic UserAPIPostRefreshEntryEditEntryTypeEnum = "DiscussionTopic"
UserAPIPostRefreshEntryEditEntryTypeEnumPv UserAPIPostRefreshEntryEditEntryTypeEnum = "PV"
UserAPIPostRefreshEntryEditEntryTypeEnumReleaseEvent UserAPIPostRefreshEntryEditEntryTypeEnum = "ReleaseEvent"
UserAPIPostRefreshEntryEditEntryTypeEnumReleaseEventSeries UserAPIPostRefreshEntryEditEntryTypeEnum = "ReleaseEventSeries"
UserAPIPostRefreshEntryEditEntryTypeEnumSong UserAPIPostRefreshEntryEditEntryTypeEnum = "Song"
UserAPIPostRefreshEntryEditEntryTypeEnumSongList UserAPIPostRefreshEntryEditEntryTypeEnum = "SongList"
UserAPIPostRefreshEntryEditEntryTypeEnumTag UserAPIPostRefreshEntryEditEntryTypeEnum = "Tag"
UserAPIPostRefreshEntryEditEntryTypeEnumUser UserAPIPostRefreshEntryEditEntryTypeEnum = "User"
UserAPIPostRefreshEntryEditEntryTypeEnumVenue UserAPIPostRefreshEntryEditEntryTypeEnum = "Venue"
)


type UserAPIPostRefreshEntryEditQueryParams struct {
    EntryID int32 `queryParam:"style=form,explode=true,name=entryId"`
    EntryType UserAPIPostRefreshEntryEditEntryTypeEnum `queryParam:"style=form,explode=true,name=entryType"`
    
}

type UserAPIPostRefreshEntryEditRequest struct {
    QueryParams UserAPIPostRefreshEntryEditQueryParams 
    
}

type UserAPIPostRefreshEntryEditResponse struct {
    ContentType string 
    StatusCode int64 
    
}

