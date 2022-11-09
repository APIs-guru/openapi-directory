import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReleaseEventApiGetAlbumsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}

export enum ReleaseEventApiGetAlbumsFieldsEnum {
    None = "None"
,    AdditionalNames = "AdditionalNames"
,    Artists = "Artists"
,    Description = "Description"
,    Discs = "Discs"
,    Identifiers = "Identifiers"
,    MainPicture = "MainPicture"
,    Names = "Names"
,    PVs = "PVs"
,    ReleaseEvent = "ReleaseEvent"
,    Tags = "Tags"
,    Tracks = "Tracks"
,    WebLinks = "WebLinks"
}

export enum ReleaseEventApiGetAlbumsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class ReleaseEventApiGetAlbumsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventApiGetAlbumsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventApiGetAlbumsLangEnum;
}


export class ReleaseEventApiGetAlbumsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReleaseEventApiGetAlbumsPathParams;

  @Metadata()
  queryParams: ReleaseEventApiGetAlbumsQueryParams;
}


export class ReleaseEventApiGetAlbumsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AlbumForApiContract })
  albumForApiContracts?: shared.AlbumForApiContract[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
