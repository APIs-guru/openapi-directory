import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetUserGroupsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetUserGroupsFilterEnum {
    Moderated = "moderated"
}

export enum GetUserGroupsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Members = "members"
,    Videos = "videos"
}


export class GetUserGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserGroupsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserGroupsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserGroupsSortEnum;
}


export class GetUserGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserGroupsPathParams;

  @Metadata()
  queryParams: GetUserGroupsQueryParams;
}


export class GetUserGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Group })
  groups?: shared.Group[];
}
