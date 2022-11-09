import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchUsersDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum SearchUsersSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Followers = "followers"
,    Relevant = "relevant"
,    Videos = "videos"
}


export class SearchUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: SearchUsersDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchUsersSortEnum;
}


export class SearchUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchUsersQueryParams;
}


export class SearchUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
