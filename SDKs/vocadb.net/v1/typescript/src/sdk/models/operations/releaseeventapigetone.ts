import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReleaseEventApiGetOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum ReleaseEventApiGetOneFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Artists = "Artists",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Series = "Series",
    SongList = "SongList",
    Tags = "Tags",
    Venue = "Venue",
    WebLinks = "WebLinks"
}

export enum ReleaseEventApiGetOneLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class ReleaseEventApiGetOneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: ReleaseEventApiGetOneFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: ReleaseEventApiGetOneLangEnum;
}


export class ReleaseEventApiGetOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReleaseEventApiGetOnePathParams;

  @SpeakeasyMetadata()
  queryParams: ReleaseEventApiGetOneQueryParams;
}


export class ReleaseEventApiGetOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  releaseEventForApiContract?: shared.ReleaseEventForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
