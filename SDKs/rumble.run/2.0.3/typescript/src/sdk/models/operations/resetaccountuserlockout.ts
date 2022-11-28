import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetAccountUserLockoutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class ResetAccountUserLockoutSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ResetAccountUserLockoutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetAccountUserLockoutPathParams;

  @SpeakeasyMetadata()
  security: ResetAccountUserLockoutSecurity;
}


export class ResetAccountUserLockoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
