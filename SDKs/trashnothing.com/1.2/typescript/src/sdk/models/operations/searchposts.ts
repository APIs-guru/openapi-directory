import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchPostsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_max" })
  dateMax?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_min" })
  dateMin?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_ids" })
  groupIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outcomes" })
  outcomes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" })
  sources: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" })
  types: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_state" })
  userState?: string;
}


export class SearchPostsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class SearchPosts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_index" })
  endIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=group_ids" })
  groupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=num_pages" })
  numPages?: number;

  @SpeakeasyMetadata({ data: "json, name=num_posts" })
  numPosts?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=posts", elemType: shared.PostSearchResult })
  posts?: shared.PostSearchResult[];

  @SpeakeasyMetadata({ data: "json, name=start_index" })
  startIndex?: number;
}


export class SearchPostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchPostsQueryParams;

  @SpeakeasyMetadata()
  security: SearchPostsSecurity;
}


export class SearchPostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchPosts200ApplicationJsonObject?: SearchPosts200ApplicationJson;
}
