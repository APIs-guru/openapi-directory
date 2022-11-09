import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllPostsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_max" })
  dateMax: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_min" })
  dateMin: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=types" })
  types: string;
}


export class GetAllPostsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetAllPostsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetAllPostsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetAllPostsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAllPostsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAllPostsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetAllPostsSecurityOption3;
}


export class GetAllPostsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAllPostsQueryParams;

  @Metadata()
  security: GetAllPostsSecurity;
}


export class GetAllPosts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=posts", elemType: shared.Post })
  posts?: shared.Post[];
}


export class GetAllPostsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAllPosts200ApplicationJsonObject?: GetAllPosts200ApplicationJson;
}
