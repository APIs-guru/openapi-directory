import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class GetFileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilePathParams;

  @Metadata()
  headers: GetFileHeaders;

  @Metadata()
  security: GetFileSecurity;
}


export class GetFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileObject?: shared.FileObject;

  @Metadata()
  statusCode: number;
}
