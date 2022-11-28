import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFolderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FolderId" })
  folderId: string;
}


export class UpdateFolderHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class UpdateFolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFolderPathParams;

  @SpeakeasyMetadata()
  headers: UpdateFolderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: UpdateFolderSecurity;
}


export class UpdateFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folder?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
