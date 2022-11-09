import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserGroupsAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetUserGroupsAlt1FilterEnum {
    Moderated = "moderated"
}

export enum GetUserGroupsAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Members = "members"
,    Videos = "videos"
}


export class GetUserGroupsAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserGroupsAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserGroupsAlt1FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserGroupsAlt1SortEnum;
}


export class GetUserGroupsAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserGroupsAlt1QueryParams;
}


export class GetUserGroupsAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Group })
  groups?: shared.Group[];
}
