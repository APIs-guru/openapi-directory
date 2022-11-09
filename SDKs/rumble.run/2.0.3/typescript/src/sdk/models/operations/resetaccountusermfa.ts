import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetAccountUserMfaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class ResetAccountUserMfaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ResetAccountUserMfaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetAccountUserMfaPathParams;

  @Metadata()
  security: ResetAccountUserMfaSecurity;
}


export class ResetAccountUserMfaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
