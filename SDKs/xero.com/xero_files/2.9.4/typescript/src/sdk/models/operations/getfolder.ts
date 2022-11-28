import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFolderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FolderId" })
  folderId: string;
}


export class GetFolderHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFolderPathParams;

  @SpeakeasyMetadata()
  headers: GetFolderHeaders;

  @SpeakeasyMetadata()
  security: GetFolderSecurity;
}


export class GetFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folder?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
