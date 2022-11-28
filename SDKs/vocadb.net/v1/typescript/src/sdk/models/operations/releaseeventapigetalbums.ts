import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReleaseEventApiGetAlbumsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" })
  eventId: number;
}

export enum ReleaseEventApiGetAlbumsFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Artists = "Artists",
    Description = "Description",
    Discs = "Discs",
    Identifiers = "Identifiers",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    Tracks = "Tracks",
    WebLinks = "WebLinks"
}

export enum ReleaseEventApiGetAlbumsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class ReleaseEventApiGetAlbumsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventApiGetAlbumsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventApiGetAlbumsLangEnum;
}


export class ReleaseEventApiGetAlbumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleaseEventApiGetAlbumsPathParams;

  @SpeakeasyMetadata()
  queryParams: ReleaseEventApiGetAlbumsQueryParams;
}


export class ReleaseEventApiGetAlbumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AlbumForApiContract })
  albumForApiContracts?: shared.AlbumForApiContract[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
