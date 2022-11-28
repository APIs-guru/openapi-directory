import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePayRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreatePayRunSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreatePayRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePayRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.PayRunInput })
  request: shared.PayRunInput[];

  @SpeakeasyMetadata()
  security: CreatePayRunSecurity;
}


export class CreatePayRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payRuns?: shared.PayRuns;

  @SpeakeasyMetadata()
  statusCode: number;
}
