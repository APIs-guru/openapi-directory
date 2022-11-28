import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetAccountUserMfaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class ResetAccountUserMfaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ResetAccountUserMfaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetAccountUserMfaPathParams;

  @SpeakeasyMetadata()
  security: ResetAccountUserMfaSecurity;
}


export class ResetAccountUserMfaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
