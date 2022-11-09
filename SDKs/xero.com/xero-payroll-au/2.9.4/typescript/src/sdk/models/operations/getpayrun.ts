import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayRunID" })
  payRunId: string;
}


export class GetPayRunHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetPayRunSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPayRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayRunPathParams;

  @Metadata()
  headers: GetPayRunHeaders;

  @Metadata()
  security: GetPayRunSecurity;
}


export class GetPayRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payRuns?: shared.PayRuns;

  @Metadata()
  statusCode: number;
}
