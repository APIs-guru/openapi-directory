package shared

type EntryThumbContractEntryTypeEnum string

const (
	EntryThumbContractEntryTypeEnumUndefined          EntryThumbContractEntryTypeEnum = "Undefined"
	EntryThumbContractEntryTypeEnumAlbum              EntryThumbContractEntryTypeEnum = "Album"
	EntryThumbContractEntryTypeEnumArtist             EntryThumbContractEntryTypeEnum = "Artist"
	EntryThumbContractEntryTypeEnumDiscussionTopic    EntryThumbContractEntryTypeEnum = "DiscussionTopic"
	EntryThumbContractEntryTypeEnumPv                 EntryThumbContractEntryTypeEnum = "PV"
	EntryThumbContractEntryTypeEnumReleaseEvent       EntryThumbContractEntryTypeEnum = "ReleaseEvent"
	EntryThumbContractEntryTypeEnumReleaseEventSeries EntryThumbContractEntryTypeEnum = "ReleaseEventSeries"
	EntryThumbContractEntryTypeEnumSong               EntryThumbContractEntryTypeEnum = "Song"
	EntryThumbContractEntryTypeEnumSongList           EntryThumbContractEntryTypeEnum = "SongList"
	EntryThumbContractEntryTypeEnumTag                EntryThumbContractEntryTypeEnum = "Tag"
	EntryThumbContractEntryTypeEnumUser               EntryThumbContractEntryTypeEnum = "User"
	EntryThumbContractEntryTypeEnumVenue              EntryThumbContractEntryTypeEnum = "Venue"
)

type EntryThumbContract struct {
	EntryType *EntryThumbContractEntryTypeEnum `json:"entryType,omitempty"`
	ID        *int32                           `json:"id,omitempty"`
	Mime      *string                          `json:"mime,omitempty"`
	Version   *int32                           `json:"version,omitempty"`
}
