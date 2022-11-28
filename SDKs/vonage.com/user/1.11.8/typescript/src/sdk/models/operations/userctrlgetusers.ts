import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserCtrlGetUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class UserCtrlGetUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login_name" })
  loginName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class UserCtrlGetUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UserCtrlGetUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserCtrlGetUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: UserCtrlGetUsersQueryParams;

  @SpeakeasyMetadata()
  security: UserCtrlGetUsersSecurity;
}


export class UserCtrlGetUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  usersHalResponse?: shared.UsersHalResponse;

  @SpeakeasyMetadata()
  validationErrorsResponse?: shared.ValidationErrorsResponse;
}
