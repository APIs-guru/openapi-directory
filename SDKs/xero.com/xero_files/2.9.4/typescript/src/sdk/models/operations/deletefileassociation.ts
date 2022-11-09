import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFileAssociationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ObjectId" })
  objectId: string;
}


export class DeleteFileAssociationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class DeleteFileAssociationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteFileAssociationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFileAssociationPathParams;

  @Metadata()
  headers: DeleteFileAssociationHeaders;

  @Metadata()
  security: DeleteFileAssociationSecurity;
}


export class DeleteFileAssociationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
