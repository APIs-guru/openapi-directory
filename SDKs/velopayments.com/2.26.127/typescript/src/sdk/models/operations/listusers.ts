import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=entityId" })
  entityId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.UserStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.UserTypeEnum;
}


export class ListUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListUsersQueryParams;
}


export class ListUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pagedUserResponse?: shared.PagedUserResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;
}
