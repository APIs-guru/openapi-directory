import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePayRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayRunID" })
  payRunId: string;
}


export class UpdatePayRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdatePayRunSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdatePayRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePayRunPathParams;

  @SpeakeasyMetadata()
  headers: UpdatePayRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.PayRunInput })
  request?: shared.PayRunInput[];

  @SpeakeasyMetadata()
  security: UpdatePayRunSecurity;
}


export class UpdatePayRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payRuns?: shared.PayRuns;

  @SpeakeasyMetadata()
  statusCode: number;
}
