import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EntryTypesApiGetMappedTagEntryTypeEnum {
    Undefined = "Undefined"
,    Album = "Album"
,    Artist = "Artist"
,    DiscussionTopic = "DiscussionTopic"
,    Pv = "PV"
,    ReleaseEvent = "ReleaseEvent"
,    ReleaseEventSeries = "ReleaseEventSeries"
,    Song = "Song"
,    SongList = "SongList"
,    Tag = "Tag"
,    User = "User"
,    Venue = "Venue"
}


export class EntryTypesApiGetMappedTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=entryType" })
  entryType: EntryTypesApiGetMappedTagEntryTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subType" })
  subType: string;
}

export enum EntryTypesApiGetMappedTagFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    AliasedTo = "AliasedTo"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    Parent = "Parent"
,    RelatedTags = "RelatedTags"
,    TranslatedDescription = "TranslatedDescription"
,    WebLinks = "WebLinks"
}


export class EntryTypesApiGetMappedTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: EntryTypesApiGetMappedTagFieldsEnum;
}


export class EntryTypesApiGetMappedTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EntryTypesApiGetMappedTagPathParams;

  @Metadata()
  queryParams: EntryTypesApiGetMappedTagQueryParams;
}


export class EntryTypesApiGetMappedTagResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagForApiContract?: shared.TagForApiContract;
}
