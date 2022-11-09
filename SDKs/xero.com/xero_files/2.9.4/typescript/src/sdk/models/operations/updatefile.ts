import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class UpdateFileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class UpdateFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFilePathParams;

  @Metadata()
  headers: UpdateFileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.FileObject;

  @Metadata()
  security: UpdateFileSecurity;
}


export class UpdateFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileObject?: shared.FileObject;

  @Metadata()
  statusCode: number;
}
