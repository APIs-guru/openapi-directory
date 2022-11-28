import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}

export enum GetGroupMembersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetGroupMembersFilterEnum {
    Moderators = "moderators"
}

export enum GetGroupMembersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetGroupMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetGroupMembersDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetGroupMembersFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetGroupMembersSortEnum;
}


export class GetGroupMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupMembersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGroupMembersQueryParams;
}


export class GetGroupMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
