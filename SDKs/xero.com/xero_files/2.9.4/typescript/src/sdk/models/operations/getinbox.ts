import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInboxHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetInboxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetInboxRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetInboxHeaders;

  @Metadata()
  security: GetInboxSecurity;
}


export class GetInboxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  folder?: any;

  @Metadata()
  statusCode: number;
}
