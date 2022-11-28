import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInboxHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetInboxSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetInboxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetInboxHeaders;

  @SpeakeasyMetadata()
  security: GetInboxSecurity;
}


export class GetInboxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folder?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
