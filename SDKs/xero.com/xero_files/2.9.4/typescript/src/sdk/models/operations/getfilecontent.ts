import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFileContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class GetFileContentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFileContentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFileContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFileContentPathParams;

  @Metadata()
  headers: GetFileContentHeaders;

  @Metadata()
  security: GetFileContentSecurity;
}


export class GetFileContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFileContent200ApplicationOctetStreamBinaryString?: Uint8Array;
}
