import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllPostsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_max" })
  dateMax: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_min" })
  dateMin: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" })
  types: string;
}


export class GetAllPostsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class GetAllPosts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=posts", elemType: shared.Post })
  posts?: shared.Post[];
}


export class GetAllPostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllPostsQueryParams;

  @SpeakeasyMetadata()
  security: GetAllPostsSecurity;
}


export class GetAllPostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllPosts200ApplicationJsonObject?: GetAllPosts200ApplicationJson;
}
