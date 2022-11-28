import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetFollowedArtistsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetFollowedArtistsArtistTypeEnum {
    Unknown = "Unknown",
    Circle = "Circle",
    Label = "Label",
    Producer = "Producer",
    Animator = "Animator",
    Illustrator = "Illustrator",
    Lyricist = "Lyricist",
    Vocaloid = "Vocaloid",
    Utau = "UTAU",
    CeVio = "CeVIO",
    OtherVoiceSynthesizer = "OtherVoiceSynthesizer",
    OtherVocalist = "OtherVocalist",
    OtherGroup = "OtherGroup",
    OtherIndividual = "OtherIndividual",
    Utaite = "Utaite",
    Band = "Band",
    Vocalist = "Vocalist",
    Character = "Character",
    SynthesizerV = "SynthesizerV"
}

export enum UserApiGetFollowedArtistsFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    ArtistLinks = "ArtistLinks",
    ArtistLinksReverse = "ArtistLinksReverse",
    BaseVoicebank = "BaseVoicebank",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Tags = "Tags",
    WebLinks = "WebLinks"
}

export enum UserApiGetFollowedArtistsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}

export enum UserApiGetFollowedArtistsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum UserApiGetFollowedArtistsSortEnum {
    None = "None",
    Name = "Name",
    AdditionDate = "AdditionDate",
    AdditionDateAsc = "AdditionDateAsc",
    ReleaseDate = "ReleaseDate",
    SongCount = "SongCount",
    SongRating = "SongRating",
    FollowerCount = "FollowerCount"
}


export class UserApiGetFollowedArtistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=artistType" })
  artistType?: UserApiGetFollowedArtistsArtistTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetFollowedArtistsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: UserApiGetFollowedArtistsLangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetFollowedArtistsNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetFollowedArtistsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];
}


export class UserApiGetFollowedArtistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetFollowedArtistsPathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiGetFollowedArtistsQueryParams;
}


export class UserApiGetFollowedArtistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultArtistForUserForApiContract?: shared.PartialFindResultArtistForUserForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
