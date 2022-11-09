import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFileAssociationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class CreateFileAssociationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class CreateFileAssociationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateFileAssociationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateFileAssociationPathParams;

  @Metadata()
  headers: CreateFileAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Association;

  @Metadata()
  security: CreateFileAssociationSecurity;
}


export class CreateFileAssociationResponse extends SpeakeasyBase {
  @Metadata()
  association?: shared.Association;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
