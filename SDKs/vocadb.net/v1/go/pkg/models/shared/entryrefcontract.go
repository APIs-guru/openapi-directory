package shared




type EntryRefContractEntryTypeEnum string

const (
    EntryRefContractEntryTypeEnumUndefined EntryRefContractEntryTypeEnum = "Undefined"
EntryRefContractEntryTypeEnumAlbum EntryRefContractEntryTypeEnum = "Album"
EntryRefContractEntryTypeEnumArtist EntryRefContractEntryTypeEnum = "Artist"
EntryRefContractEntryTypeEnumDiscussionTopic EntryRefContractEntryTypeEnum = "DiscussionTopic"
EntryRefContractEntryTypeEnumPv EntryRefContractEntryTypeEnum = "PV"
EntryRefContractEntryTypeEnumReleaseEvent EntryRefContractEntryTypeEnum = "ReleaseEvent"
EntryRefContractEntryTypeEnumReleaseEventSeries EntryRefContractEntryTypeEnum = "ReleaseEventSeries"
EntryRefContractEntryTypeEnumSong EntryRefContractEntryTypeEnum = "Song"
EntryRefContractEntryTypeEnumSongList EntryRefContractEntryTypeEnum = "SongList"
EntryRefContractEntryTypeEnumTag EntryRefContractEntryTypeEnum = "Tag"
EntryRefContractEntryTypeEnumUser EntryRefContractEntryTypeEnum = "User"
EntryRefContractEntryTypeEnumVenue EntryRefContractEntryTypeEnum = "Venue"
)


type EntryRefContract struct {
    EntryType *EntryRefContractEntryTypeEnum `json:"entryType,omitempty"`
    ID *int32 `json:"id,omitempty"`
    
}

