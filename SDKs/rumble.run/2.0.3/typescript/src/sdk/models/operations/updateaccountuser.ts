import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAccountUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UpdateAccountUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAccountUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAccountUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserOptions;

  @SpeakeasyMetadata()
  security: UpdateAccountUserSecurity;
}


export class UpdateAccountUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
