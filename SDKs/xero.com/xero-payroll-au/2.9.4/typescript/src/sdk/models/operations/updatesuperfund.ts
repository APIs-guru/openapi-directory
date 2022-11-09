import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSuperfundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SuperFundID" })
  superFundId: string;
}


export class UpdateSuperfundHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdateSuperfundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateSuperfundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSuperfundPathParams;

  @Metadata()
  headers: UpdateSuperfundHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.SuperFund })
  request?: shared.SuperFund[];

  @Metadata()
  security: UpdateSuperfundSecurity;
}


export class UpdateSuperfundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  superFunds?: shared.SuperFunds;
}
