import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFileAssociationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class GetFileAssociationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFileAssociationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFileAssociationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFileAssociationsPathParams;

  @Metadata()
  headers: GetFileAssociationsHeaders;

  @Metadata()
  security: GetFileAssociationsSecurity;
}


export class GetFileAssociationsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Association })
  associations?: shared.Association[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
