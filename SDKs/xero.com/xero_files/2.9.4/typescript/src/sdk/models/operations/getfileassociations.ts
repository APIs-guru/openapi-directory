import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFileAssociationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileId" })
  fileId: string;
}


export class GetFileAssociationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetFileAssociationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetFileAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFileAssociationsPathParams;

  @SpeakeasyMetadata()
  headers: GetFileAssociationsHeaders;

  @SpeakeasyMetadata()
  security: GetFileAssociationsSecurity;
}


export class GetFileAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Association })
  associations?: shared.Association[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
