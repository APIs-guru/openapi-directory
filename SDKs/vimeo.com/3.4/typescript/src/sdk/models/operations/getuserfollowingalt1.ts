import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUserFollowingAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetUserFollowingAlt1FilterEnum {
    Online = "online"
}

export enum GetUserFollowingAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetUserFollowingAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserFollowingAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserFollowingAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserFollowingAlt1SortEnum;
}


export class GetUserFollowingAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserFollowingAlt1QueryParams;
}


export class GetUserFollowingAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
