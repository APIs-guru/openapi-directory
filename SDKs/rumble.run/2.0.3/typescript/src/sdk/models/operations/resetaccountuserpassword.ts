import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetAccountUserPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class ResetAccountUserPasswordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ResetAccountUserPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetAccountUserPasswordPathParams;

  @SpeakeasyMetadata()
  security: ResetAccountUserPasswordSecurity;
}


export class ResetAccountUserPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
