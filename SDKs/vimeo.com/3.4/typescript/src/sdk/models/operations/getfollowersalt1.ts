import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFollowersAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetFollowersAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetFollowersAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetFollowersAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFollowersAlt1SortEnum;
}


export class GetFollowersAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFollowersAlt1QueryParams;
}


export class GetFollowersAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
