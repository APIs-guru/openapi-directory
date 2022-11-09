import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSuperfundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SuperFundID" })
  superFundId: string;
}


export class GetSuperfundHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetSuperfundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSuperfundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSuperfundPathParams;

  @Metadata()
  headers: GetSuperfundHeaders;

  @Metadata()
  security: GetSuperfundSecurity;
}


export class GetSuperfundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  superFunds?: shared.SuperFunds;
}
