import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserFollowingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetUserFollowingDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetUserFollowingFilterEnum {
    Online = "online"
}

export enum GetUserFollowingSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetUserFollowingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserFollowingDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserFollowingFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserFollowingSortEnum;
}


export class GetUserFollowingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserFollowingPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserFollowingQueryParams;
}


export class GetUserFollowingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
