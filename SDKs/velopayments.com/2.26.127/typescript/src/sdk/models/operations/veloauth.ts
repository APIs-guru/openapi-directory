import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VeloAuthQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=grant_type" })
  grantType?: string;
}


export class VeloAuthSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class VeloAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VeloAuthQueryParams;

  @SpeakeasyMetadata()
  security: VeloAuthSecurity;
}


export class VeloAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authResponse?: shared.AuthResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
