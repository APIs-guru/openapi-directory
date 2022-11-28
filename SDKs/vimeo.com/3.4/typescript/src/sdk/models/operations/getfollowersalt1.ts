import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFollowersAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetFollowersAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetFollowersAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetFollowersAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFollowersAlt1SortEnum;
}


export class GetFollowersAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFollowersAlt1QueryParams;
}


export class GetFollowersAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
