import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFolderHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class CreateFolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateFolderRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFolderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: CreateFolderSecurity;
}


export class CreateFolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  folder?: any;

  @Metadata()
  statusCode: number;
}
