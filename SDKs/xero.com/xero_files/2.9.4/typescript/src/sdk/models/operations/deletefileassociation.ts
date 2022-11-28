import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteFileAssociationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ObjectId" })
  objectId: string;
}


export class DeleteFileAssociationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class DeleteFileAssociationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteFileAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFileAssociationPathParams;

  @SpeakeasyMetadata()
  headers: DeleteFileAssociationHeaders;

  @SpeakeasyMetadata()
  security: DeleteFileAssociationSecurity;
}


export class DeleteFileAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
