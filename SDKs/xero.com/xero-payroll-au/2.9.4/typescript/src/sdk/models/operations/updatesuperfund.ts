import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSuperfundPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SuperFundID" })
  superFundId: string;
}


export class UpdateSuperfundHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdateSuperfundSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateSuperfundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSuperfundPathParams;

  @SpeakeasyMetadata()
  headers: UpdateSuperfundHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.SuperFundInput })
  request?: shared.SuperFundInput[];

  @SpeakeasyMetadata()
  security: UpdateSuperfundSecurity;
}


export class UpdateSuperfundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  superFunds?: shared.SuperFunds;
}
