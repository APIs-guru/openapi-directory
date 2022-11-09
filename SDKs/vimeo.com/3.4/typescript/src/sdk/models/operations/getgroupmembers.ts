import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}

export enum GetGroupMembersDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetGroupMembersFilterEnum {
    Moderators = "moderators"
}

export enum GetGroupMembersSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetGroupMembersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetGroupMembersDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetGroupMembersFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetGroupMembersSortEnum;
}


export class GetGroupMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupMembersPathParams;

  @Metadata()
  queryParams: GetGroupMembersQueryParams;
}


export class GetGroupMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
