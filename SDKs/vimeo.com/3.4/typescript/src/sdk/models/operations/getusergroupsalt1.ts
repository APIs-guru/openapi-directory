import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUserGroupsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetUserGroupsAlt1FilterEnum {
    Moderated = "moderated"
}

export enum GetUserGroupsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Members = "members",
    Videos = "videos"
}


export class GetUserGroupsAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserGroupsAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserGroupsAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserGroupsAlt1SortEnum;
}


export class GetUserGroupsAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserGroupsAlt1QueryParams;
}


export class GetUserGroupsAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Group })
  groups?: shared.Group[];
}
