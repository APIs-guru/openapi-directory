import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EntryTypesApiGetMappedTagEntryTypeEnum {
    Undefined = "Undefined",
    Album = "Album",
    Artist = "Artist",
    DiscussionTopic = "DiscussionTopic",
    Pv = "PV",
    ReleaseEvent = "ReleaseEvent",
    ReleaseEventSeries = "ReleaseEventSeries",
    Song = "Song",
    SongList = "SongList",
    Tag = "Tag",
    User = "User",
    Venue = "Venue"
}
export declare class EntryTypesApiGetMappedTagPathParams extends SpeakeasyBase {
    entryType: EntryTypesApiGetMappedTagEntryTypeEnum;
    subType: string;
}
export declare enum EntryTypesApiGetMappedTagFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    AliasedTo = "AliasedTo",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Parent = "Parent",
    RelatedTags = "RelatedTags",
    TranslatedDescription = "TranslatedDescription",
    WebLinks = "WebLinks"
}
export declare class EntryTypesApiGetMappedTagQueryParams extends SpeakeasyBase {
    fields?: EntryTypesApiGetMappedTagFieldsEnum;
}
export declare class EntryTypesApiGetMappedTagRequest extends SpeakeasyBase {
    pathParams: EntryTypesApiGetMappedTagPathParams;
    queryParams: EntryTypesApiGetMappedTagQueryParams;
}
export declare class EntryTypesApiGetMappedTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tagForApiContract?: shared.TagForApiContract;
}
