import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetAccountUserLockoutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class ResetAccountUserLockoutSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ResetAccountUserLockoutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetAccountUserLockoutPathParams;

  @Metadata()
  security: ResetAccountUserLockoutSecurity;
}


export class ResetAccountUserLockoutResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
