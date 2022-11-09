import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAccountUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UpdateAccountUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAccountUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAccountUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserOptions;

  @Metadata()
  security: UpdateAccountUserSecurity;
}


export class UpdateAccountUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
