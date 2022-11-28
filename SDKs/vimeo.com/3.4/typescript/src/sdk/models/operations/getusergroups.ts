import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetUserGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetUserGroupsFilterEnum {
    Moderated = "moderated"
}

export enum GetUserGroupsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Members = "members",
    Videos = "videos"
}


export class GetUserGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserGroupsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserGroupsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserGroupsSortEnum;
}


export class GetUserGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserGroupsQueryParams;
}


export class GetUserGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Group })
  groups?: shared.Group[];
}
