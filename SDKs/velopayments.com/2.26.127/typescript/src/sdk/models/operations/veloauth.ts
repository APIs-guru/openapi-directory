import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VeloAuthQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=grant_type" })
  grantType?: string;
}


export class VeloAuthSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class VeloAuthRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VeloAuthQueryParams;

  @Metadata()
  security: VeloAuthSecurity;
}


export class VeloAuthResponse extends SpeakeasyBase {
  @Metadata()
  authResponse?: shared.AuthResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
