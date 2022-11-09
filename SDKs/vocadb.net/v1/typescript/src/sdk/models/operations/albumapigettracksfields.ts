import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlbumApiGetTracksFieldsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum AlbumApiGetTracksFieldsLangEnum {
    Default = "Default"
,    Japanese = "Japanese"
,    Romaji = "Romaji"
,    English = "English"
}


export class AlbumApiGetTracksFieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=discNumber" })
  discNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=field" })
  field?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: AlbumApiGetTracksFieldsLangEnum;
}


export class AlbumApiGetTracksFieldsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AlbumApiGetTracksFieldsPathParams;

  @Metadata()
  queryParams: AlbumApiGetTracksFieldsQueryParams;
}


export class AlbumApiGetTracksFieldsResponse extends SpeakeasyBase {
  @Metadata()
  albumApiGetTracksFields200ApplicationJsonObjects?: Map<string, string>[];

  @Metadata()
  albumApiGetTracksFields200ApplicationJsonpObjects?: Map<string, string>[];

  @Metadata()
  albumApiGetTracksFields200TextJsonObjects?: Map<string, string>[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
