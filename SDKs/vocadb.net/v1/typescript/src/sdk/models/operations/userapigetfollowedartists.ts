import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetFollowedArtistsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetFollowedArtistsArtistTypeEnum {
    Unknown = "Unknown"
,    Circle = "Circle"
,    Label = "Label"
,    Producer = "Producer"
,    Animator = "Animator"
,    Illustrator = "Illustrator"
,    Lyricist = "Lyricist"
,    Vocaloid = "Vocaloid"
,    Utau = "UTAU"
,    CeVio = "CeVIO"
,    OtherVoiceSynthesizer = "OtherVoiceSynthesizer"
,    OtherVocalist = "OtherVocalist"
,    OtherGroup = "OtherGroup"
,    OtherIndividual = "OtherIndividual"
,    Utaite = "Utaite"
,    Band = "Band"
,    Vocalist = "Vocalist"
,    Character = "Character"
,    SynthesizerV = "SynthesizerV"
}

export enum UserApiGetFollowedArtistsFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    ArtistLinks = "ArtistLinks"
,    ArtistLinksReverse = "ArtistLinksReverse"
,    BaseVoicebank = "BaseVoicebank"
,    Description = "Description"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    Tags = "Tags"
,    WebLinks = "WebLinks"
}

export enum UserApiGetFollowedArtistsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}

export enum UserApiGetFollowedArtistsNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum UserApiGetFollowedArtistsSortEnum {
    None = "None"
,    Name = "Name"
,    AdditionDate = "AdditionDate"
,    AdditionDateAsc = "AdditionDateAsc"
,    ReleaseDate = "ReleaseDate"
,    SongCount = "SongCount"
,    SongRating = "SongRating"
,    FollowerCount = "FollowerCount"
}


export class UserApiGetFollowedArtistsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=artistType" })
  artistType?: UserApiGetFollowedArtistsArtistTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetFollowedArtistsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: UserApiGetFollowedArtistsLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetFollowedArtistsNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetFollowedArtistsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];
}


export class UserApiGetFollowedArtistsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetFollowedArtistsPathParams;

  @Metadata()
  queryParams: UserApiGetFollowedArtistsQueryParams;
}


export class UserApiGetFollowedArtistsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultArtistForUserForApiContract?: shared.PartialFindResultArtistForUserForApiContract;

  @Metadata()
  statusCode: number;
}
