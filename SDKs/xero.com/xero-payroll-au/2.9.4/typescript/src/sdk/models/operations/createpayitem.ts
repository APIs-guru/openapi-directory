import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePayItemHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreatePayItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreatePayItemRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePayItemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayItem;

  @Metadata()
  security: CreatePayItemSecurity;
}


export class CreatePayItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  payItems?: shared.PayItems;

  @Metadata()
  statusCode: number;
}
