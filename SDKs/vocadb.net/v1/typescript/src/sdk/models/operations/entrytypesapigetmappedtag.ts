import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EntryTypesApiGetMappedTagEntryTypeEnum {
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


export class EntryTypesApiGetMappedTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entryType" })
  entryType: EntryTypesApiGetMappedTagEntryTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subType" })
  subType: string;
}

export enum EntryTypesApiGetMappedTagFieldsEnum {
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


export class EntryTypesApiGetMappedTagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: EntryTypesApiGetMappedTagFieldsEnum;
}


export class EntryTypesApiGetMappedTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EntryTypesApiGetMappedTagPathParams;

  @SpeakeasyMetadata()
  queryParams: EntryTypesApiGetMappedTagQueryParams;
}


export class EntryTypesApiGetMappedTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagForApiContract?: shared.TagForApiContract;
}
