import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class DeleteFileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class DeleteFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFilePathParams;

  @SpeakeasyMetadata()
  headers: DeleteFileHeaders;

  @SpeakeasyMetadata()
  security: DeleteFileSecurity;
}


export class DeleteFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
