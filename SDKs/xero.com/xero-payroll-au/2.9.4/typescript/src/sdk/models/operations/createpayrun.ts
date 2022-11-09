import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePayRunHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreatePayRunSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreatePayRunRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePayRunHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.PayRun })
  request: shared.PayRun[];

  @Metadata()
  security: CreatePayRunSecurity;
}


export class CreatePayRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payRuns?: shared.PayRuns;

  @Metadata()
  statusCode: number;
}
