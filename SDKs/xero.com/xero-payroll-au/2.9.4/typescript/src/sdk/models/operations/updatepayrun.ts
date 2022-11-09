import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePayRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayRunID" })
  payRunId: string;
}


export class UpdatePayRunHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdatePayRunSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdatePayRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePayRunPathParams;

  @Metadata()
  headers: UpdatePayRunHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.PayRun })
  request?: shared.PayRun[];

  @Metadata()
  security: UpdatePayRunSecurity;
}


export class UpdatePayRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payRuns?: shared.PayRuns;

  @Metadata()
  statusCode: number;
}
