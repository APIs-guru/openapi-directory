import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePayItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreatePayItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreatePayItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePayItemHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PayItemInput;

  @SpeakeasyMetadata()
  security: CreatePayItemSecurity;
}


export class CreatePayItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  payItems?: shared.PayItems;

  @SpeakeasyMetadata()
  statusCode: number;
}
