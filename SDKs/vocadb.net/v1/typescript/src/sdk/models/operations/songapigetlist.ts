import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SongApiGetListArtistParticipationStatusEnum {
    Everything = "Everything",
    OnlyMainAlbums = "OnlyMainAlbums",
    OnlyCollaborations = "OnlyCollaborations"
}

export enum SongApiGetListFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Albums = "Albums",
    Artists = "Artists",
    Lyrics = "Lyrics",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    ThumbUrl = "ThumbUrl",
    WebLinks = "WebLinks"
}

export enum SongApiGetListLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum SongApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum SongApiGetListPvServicesEnum {
    Nothing = "Nothing",
    NicoNicoDouga = "NicoNicoDouga",
    Youtube = "Youtube",
    SoundCloud = "SoundCloud",
    Vimeo = "Vimeo",
    Piapro = "Piapro",
    Bilibili = "Bilibili",
    File = "File",
    LocalFile = "LocalFile",
    Creofuga = "Creofuga",
    Bandcamp = "Bandcamp"
}

export enum SongApiGetListSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    PublishDate = "PublishDate",
    FavoritedTimes = "FavoritedTimes",
    RatingScore = "RatingScore",
    TagUsageCount = "TagUsageCount"
}

export enum SongApiGetListStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}


export class SongApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advancedFilters" })
  advancedFilters?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=afterDate" })
  afterDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistId" })
  artistId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistParticipationStatus" })
  artistParticipationStatus?: SongApiGetListArtistParticipationStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beforeDate" })
  beforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childVoicebanks" })
  childVoicebanks?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: SongApiGetListFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeMembers" })
  includeMembers?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: SongApiGetListLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minScore" })
  minScore?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: SongApiGetListNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyWithPvs" })
  onlyWithPvs?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentSongId" })
  parentSongId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferAccurateMatches" })
  preferAccurateMatches?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pvServices" })
  pvServices?: SongApiGetListPvServicesEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseEventId" })
  releaseEventId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=songTypes" })
  songTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SongApiGetListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: SongApiGetListStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unifyTypesAndTags" })
  unifyTypesAndTags?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userCollectionId" })
  userCollectionId?: number;
}


export class SongApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SongApiGetListQueryParams;
}


export class SongApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultSongForApiContract?: shared.PartialFindResultSongForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
