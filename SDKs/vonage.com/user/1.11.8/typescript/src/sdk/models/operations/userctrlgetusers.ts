import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserCtrlGetUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class UserCtrlGetUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first_name" })
  firstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_name" })
  lastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login_name" })
  loginName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class UserCtrlGetUsersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UserCtrlGetUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserCtrlGetUsersPathParams;

  @Metadata()
  queryParams: UserCtrlGetUsersQueryParams;

  @Metadata()
  security: UserCtrlGetUsersSecurity;
}


export class UserCtrlGetUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  usersHalResponse?: shared.UsersHalResponse;

  @Metadata()
  validationErrorsResponse?: shared.ValidationErrorsResponse;
}
