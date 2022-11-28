import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchUsersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum SearchUsersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Relevant = "relevant",
    Videos = "videos"
}


export class SearchUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: SearchUsersDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchUsersSortEnum;
}


export class SearchUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchUsersQueryParams;
}


export class SearchUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
