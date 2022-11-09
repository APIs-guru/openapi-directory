import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserFollowingAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetUserFollowingAlt1FilterEnum {
    Online = "online"
}

export enum GetUserFollowingAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetUserFollowingAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserFollowingAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserFollowingAlt1FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserFollowingAlt1SortEnum;
}


export class GetUserFollowingAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserFollowingAlt1QueryParams;
}


export class GetUserFollowingAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
