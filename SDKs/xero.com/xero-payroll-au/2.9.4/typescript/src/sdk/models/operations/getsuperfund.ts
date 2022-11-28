import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSuperfundPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SuperFundID" })
  superFundId: string;
}


export class GetSuperfundHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetSuperfundSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSuperfundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSuperfundPathParams;

  @SpeakeasyMetadata()
  headers: GetSuperfundHeaders;

  @SpeakeasyMetadata()
  security: GetSuperfundSecurity;
}


export class GetSuperfundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  superFunds?: shared.SuperFunds;
}
