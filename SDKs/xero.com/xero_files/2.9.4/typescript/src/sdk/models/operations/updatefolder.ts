import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FolderId" })
  folderId: string;
}


export class UpdateFolderHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class UpdateFolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFolderPathParams;

  @Metadata()
  headers: UpdateFolderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: UpdateFolderSecurity;
}


export class UpdateFolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  folder?: any;

  @Metadata()
  statusCode: number;
}
