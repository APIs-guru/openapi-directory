import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFileContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class GetFileContentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFileContentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFileContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFileContentPathParams;

  @SpeakeasyMetadata()
  headers: GetFileContentHeaders;

  @SpeakeasyMetadata()
  security: GetFileContentSecurity;
}


export class GetFileContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFileContent200ApplicationOctetStreamBinaryString?: Uint8Array;
}
