import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadFileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FolderId" })
  folderId?: string;
}


export class UploadFileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class UploadFileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body?: string;

  @Metadata({ data: "multipart_form, name=filename" })
  filename?: string;

  @Metadata({ data: "multipart_form, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class UploadFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UploadFileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UploadFileQueryParams;

  @Metadata()
  headers: UploadFileHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadFileRequestBody;

  @Metadata()
  security: UploadFileSecurity;
}


export class UploadFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileObject?: shared.FileObject;

  @Metadata()
  statusCode: number;
}
