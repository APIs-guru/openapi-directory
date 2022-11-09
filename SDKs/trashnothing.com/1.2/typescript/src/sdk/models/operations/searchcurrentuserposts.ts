import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchCurrentUserPostsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sources" })
  sources: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=types" })
  types: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_state" })
  userState?: string;
}


export class SearchCurrentUserPostsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchCurrentUserPostsQueryParams;
}


export class SearchCurrentUserPosts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_index" })
  endIndex?: number;

  @Metadata({ data: "json, name=group_ids" })
  groupIds?: string[];

  @Metadata({ data: "json, name=num_pages" })
  numPages?: number;

  @Metadata({ data: "json, name=num_posts" })
  numPosts?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;

  @Metadata({ data: "json, name=posts", elemType: shared.PostSearchResult })
  posts?: shared.PostSearchResult[];

  @Metadata({ data: "json, name=start_index" })
  startIndex?: number;
}


export class SearchCurrentUserPostsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchCurrentUserPosts200ApplicationJsonObject?: SearchCurrentUserPosts200ApplicationJson;
}
