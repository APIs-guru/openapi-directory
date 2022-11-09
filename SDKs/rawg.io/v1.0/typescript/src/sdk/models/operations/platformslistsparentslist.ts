import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlatformsListsParentsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class PlatformsListsParentsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PlatformsListsParentsListQueryParams;
}


export class PlatformsListsParentsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.PlatformParentSingle })
  results: shared.PlatformParentSingle[];
}


export class PlatformsListsParentsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  platformsListsParentsList200ApplicationJsonObject?: PlatformsListsParentsList200ApplicationJson;
}
