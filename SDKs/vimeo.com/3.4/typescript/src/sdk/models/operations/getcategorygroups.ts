import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoryGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}

export enum GetCategoryGroupsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetCategoryGroupsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Members = "members"
,    Videos = "videos"
}


export class GetCategoryGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategoryGroupsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategoryGroupsSortEnum;
}


export class GetCategoryGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoryGroupsPathParams;

  @Metadata()
  queryParams: GetCategoryGroupsQueryParams;
}


export class GetCategoryGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Group })
  groups?: shared.Group[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
