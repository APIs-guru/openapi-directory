import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayRunID" })
  payRunId: string;
}


export class GetPayRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetPayRunSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPayRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayRunPathParams;

  @SpeakeasyMetadata()
  headers: GetPayRunHeaders;

  @SpeakeasyMetadata()
  security: GetPayRunSecurity;
}


export class GetPayRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payRuns?: shared.PayRuns;

  @SpeakeasyMetadata()
  statusCode: number;
}
