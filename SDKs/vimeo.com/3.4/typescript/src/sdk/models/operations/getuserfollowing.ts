import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserFollowingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetUserFollowingDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetUserFollowingFilterEnum {
    Online = "online"
}

export enum GetUserFollowingSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetUserFollowingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetUserFollowingDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetUserFollowingFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUserFollowingSortEnum;
}


export class GetUserFollowingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserFollowingPathParams;

  @Metadata()
  queryParams: GetUserFollowingQueryParams;
}


export class GetUserFollowingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
