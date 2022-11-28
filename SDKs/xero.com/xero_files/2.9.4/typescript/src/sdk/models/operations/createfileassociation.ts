import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFileAssociationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class CreateFileAssociationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class CreateFileAssociationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateFileAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateFileAssociationPathParams;

  @SpeakeasyMetadata()
  headers: CreateFileAssociationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Association;

  @SpeakeasyMetadata()
  security: CreateFileAssociationSecurity;
}


export class CreateFileAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: shared.Association;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
