import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFollowersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetFollowersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetFollowersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetFollowersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetFollowersDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFollowersSortEnum;
}


export class GetFollowersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFollowersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFollowersQueryParams;
}


export class GetFollowersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
