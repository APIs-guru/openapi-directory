import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlbumApiGetTracksFieldsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum AlbumApiGetTracksFieldsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}


export class AlbumApiGetTracksFieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=discNumber" })
  discNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field" })
  field?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: AlbumApiGetTracksFieldsLangEnum;
}


export class AlbumApiGetTracksFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AlbumApiGetTracksFieldsPathParams;

  @SpeakeasyMetadata()
  queryParams: AlbumApiGetTracksFieldsQueryParams;
}


export class AlbumApiGetTracksFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  albumApiGetTracksFields200ApplicationJsonObjects?: Map<string, string>[];

  @SpeakeasyMetadata()
  albumApiGetTracksFields200ApplicationJsonpObjects?: Map<string, string>[];

  @SpeakeasyMetadata()
  albumApiGetTracksFields200TextJsonObjects?: Map<string, string>[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
