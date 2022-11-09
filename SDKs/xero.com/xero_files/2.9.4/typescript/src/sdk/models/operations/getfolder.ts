import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FolderId" })
  folderId: string;
}


export class GetFolderHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFolderPathParams;

  @Metadata()
  headers: GetFolderHeaders;

  @Metadata()
  security: GetFolderSecurity;
}


export class GetFolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  folder?: any;

  @Metadata()
  statusCode: number;
}
