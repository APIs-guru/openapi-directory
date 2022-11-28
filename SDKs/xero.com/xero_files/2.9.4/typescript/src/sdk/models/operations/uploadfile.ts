import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadFileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FolderId" })
  folderId?: string;
}


export class UploadFileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class UploadFileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;
}


export class UploadFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UploadFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UploadFileQueryParams;

  @SpeakeasyMetadata()
  headers: UploadFileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadFileRequestBody;

  @SpeakeasyMetadata()
  security: UploadFileSecurity;
}


export class UploadFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileObject?: shared.FileObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
