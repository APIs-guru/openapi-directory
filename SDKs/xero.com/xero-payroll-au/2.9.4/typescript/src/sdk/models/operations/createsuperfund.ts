import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSuperfundHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateSuperfundSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateSuperfundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSuperfundHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.SuperFundInput })
  request: shared.SuperFundInput[];

  @SpeakeasyMetadata()
  security: CreateSuperfundSecurity;
}


export class CreateSuperfundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  superFunds?: shared.SuperFunds;
}
