import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSuperfundHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateSuperfundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateSuperfundRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSuperfundHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.SuperFund })
  request: shared.SuperFund[];

  @Metadata()
  security: CreateSuperfundSecurity;
}


export class CreateSuperfundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  superFunds?: shared.SuperFunds;
}
