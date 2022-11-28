import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserCtrlGetUserByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class UserCtrlGetUserByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UserCtrlGetUserByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserCtrlGetUserByIdPathParams;

  @SpeakeasyMetadata()
  security: UserCtrlGetUserByIdSecurity;
}


export class UserCtrlGetUserByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userHalResponse?: shared.UserHalResponse;
}
