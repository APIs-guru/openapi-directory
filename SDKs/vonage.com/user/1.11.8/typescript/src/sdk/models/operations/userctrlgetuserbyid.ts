import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserCtrlGetUserByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class UserCtrlGetUserByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UserCtrlGetUserByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserCtrlGetUserByIdPathParams;

  @Metadata()
  security: UserCtrlGetUserByIdSecurity;
}


export class UserCtrlGetUserByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  userHalResponse?: shared.UserHalResponse;
}
