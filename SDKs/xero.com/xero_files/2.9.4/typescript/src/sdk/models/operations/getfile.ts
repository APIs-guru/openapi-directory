import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class GetFileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFilePathParams;

  @SpeakeasyMetadata()
  headers: GetFileHeaders;

  @SpeakeasyMetadata()
  security: GetFileSecurity;
}


export class GetFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileObject?: shared.FileObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
