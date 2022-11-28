import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class UpdateFileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class UpdateFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFilePathParams;

  @SpeakeasyMetadata()
  headers: UpdateFileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.FileObject;

  @SpeakeasyMetadata()
  security: UpdateFileSecurity;
}


export class UpdateFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileObject?: shared.FileObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
