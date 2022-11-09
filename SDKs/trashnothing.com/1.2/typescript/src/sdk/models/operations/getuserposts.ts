import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserPostsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetUserPostsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_max" })
  dateMax?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_min" })
  dateMin?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_ids" })
  groupIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outcomes" })
  outcomes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sources" })
  sources: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=types" })
  types: string;
}


export class GetUserPostsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetUserPostsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetUserPostsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserPostsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUserPostsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUserPostsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUserPostsSecurityOption3;
}


export class GetUserPostsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserPostsPathParams;

  @Metadata()
  queryParams: GetUserPostsQueryParams;

  @Metadata()
  security: GetUserPostsSecurity;
}


export class GetUserPosts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_index" })
  endIndex?: number;

  @Metadata({ data: "json, name=group_ids" })
  groupIds?: string[];

  @Metadata({ data: "json, name=last_listings_view" })
  lastListingsView?: Date;

  @Metadata({ data: "json, name=num_pages" })
  numPages?: number;

  @Metadata({ data: "json, name=num_posts" })
  numPosts?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;

  @Metadata({ data: "json, name=posts", elemType: shared.Post })
  posts?: shared.Post[];

  @Metadata({ data: "json, name=start_index" })
  startIndex?: number;
}


export class GetUserPostsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getUserPosts200ApplicationJsonObject?: GetUserPosts200ApplicationJson;
}
