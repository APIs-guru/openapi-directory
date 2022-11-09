import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SongApiGetListArtistParticipationStatusEnum {
    Everything = "Everything"
,    OnlyMainAlbums = "OnlyMainAlbums"
,    OnlyCollaborations = "OnlyCollaborations"
}

export enum SongApiGetListFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Albums = "Albums"
,    Artists = "Artists"
,    Lyrics = "Lyrics"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    PVs = "PVs"
,    ReleaseEvent = "ReleaseEvent"
,    Tags = "Tags"
,    ThumbUrl = "ThumbUrl"
,    WebLinks = "WebLinks"
}

export enum SongApiGetListLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum SongApiGetListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum SongApiGetListPvServicesEnum {
    Nothing = "Nothing"
,    NicoNicoDouga = "NicoNicoDouga"
,    Youtube = "Youtube"
,    SoundCloud = "SoundCloud"
,    Vimeo = "Vimeo"
,    Piapro = "Piapro"
,    Bilibili = "Bilibili"
,    File = "File"
,    LocalFile = "LocalFile"
,    Creofuga = "Creofuga"
,    Bandcamp = "Bandcamp"
}

export enum SongApiGetListSortEnum {
    None = "None"
,    Name = "Name"
,    AdditionDate = "AdditionDate"
,    PublishDate = "PublishDate"
,    FavoritedTimes = "FavoritedTimes"
,    RatingScore = "RatingScore"
,    TagUsageCount = "TagUsageCount"
}

export enum SongApiGetListStatusEnum {
    Draft = "Draft"
,    Finished = "Finished"
,    Approved = "Approved"
,    Locked = "Locked"
}


export class SongApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=afterDate" })
  afterDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=artistParticipationStatus" })
  artistParticipationStatus?: SongApiGetListArtistParticipationStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=beforeDate" })
  beforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeMembers" })
  includeMembers?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongApiGetListLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minScore" })
  minScore?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongApiGetListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onlyWithPvs" })
  onlyWithPvs?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentSongId" })
  parentSongId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" })
  preferAccurateMatches?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pvServices" })
  pvServices?: SongApiGetListPvServicesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=releaseEventId" })
  releaseEventId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=songTypes" })
  songTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SongApiGetListSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: SongApiGetListStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=unifyTypesAndTags" })
  unifyTypesAndTags?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userCollectionId" })
  userCollectionId?: number;
}


export class SongApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SongApiGetListQueryParams;
}


export class SongApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultSongForApiContract?: shared.PartialFindResultSongForApiContract;

  @Metadata()
  statusCode: number;
}
