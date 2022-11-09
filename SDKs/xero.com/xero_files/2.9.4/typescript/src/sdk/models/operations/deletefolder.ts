import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FolderId" })
  folderId: string;
}


export class DeleteFolderHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class DeleteFolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFolderPathParams;

  @Metadata()
  headers: DeleteFolderHeaders;

  @Metadata()
  security: DeleteFolderSecurity;
}


export class DeleteFolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
