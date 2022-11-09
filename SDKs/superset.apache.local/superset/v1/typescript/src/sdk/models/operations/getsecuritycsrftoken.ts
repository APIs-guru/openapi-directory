import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSecurityCsrfTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSecurityCsrfTokenRequest extends SpeakeasyBase {
  @Metadata()
  security: GetSecurityCsrfTokenSecurity;
}


export class GetSecurityCsrfToken200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: string;
}


export class GetSecurityCsrfToken401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSecurityCsrfToken500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSecurityCsrfTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSecurityCsrfToken200ApplicationJsonObject?: GetSecurityCsrfToken200ApplicationJson;

  @Metadata()
  getSecurityCsrfToken401ApplicationJsonObject?: GetSecurityCsrfToken401ApplicationJson;

  @Metadata()
  getSecurityCsrfToken500ApplicationJsonObject?: GetSecurityCsrfToken500ApplicationJson;

  @Metadata()
  statusCode: number;
}
