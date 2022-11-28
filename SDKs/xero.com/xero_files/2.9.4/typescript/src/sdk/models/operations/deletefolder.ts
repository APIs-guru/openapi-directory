import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteFolderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FolderId" })
  folderId: string;
}


export class DeleteFolderHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class DeleteFolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFolderPathParams;

  @SpeakeasyMetadata()
  headers: DeleteFolderHeaders;

  @SpeakeasyMetadata()
  security: DeleteFolderSecurity;
}


export class DeleteFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
