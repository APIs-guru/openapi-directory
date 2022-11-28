import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSecurityCsrfTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSecurityCsrfToken200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;
}


export class GetSecurityCsrfToken401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSecurityCsrfToken500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSecurityCsrfTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetSecurityCsrfTokenSecurity;
}


export class GetSecurityCsrfTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSecurityCsrfToken200ApplicationJsonObject?: GetSecurityCsrfToken200ApplicationJson;

  @SpeakeasyMetadata()
  getSecurityCsrfToken401ApplicationJsonObject?: GetSecurityCsrfToken401ApplicationJson;

  @SpeakeasyMetadata()
  getSecurityCsrfToken500ApplicationJsonObject?: GetSecurityCsrfToken500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
