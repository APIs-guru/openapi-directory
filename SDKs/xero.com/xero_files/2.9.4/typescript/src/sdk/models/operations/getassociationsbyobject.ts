import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssociationsByObjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ObjectId" })
  objectId: string;
}


export class GetAssociationsByObjectHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssociationsByObjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssociationsByObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAssociationsByObjectPathParams;

  @SpeakeasyMetadata()
  headers: GetAssociationsByObjectHeaders;

  @SpeakeasyMetadata()
  security: GetAssociationsByObjectSecurity;
}


export class GetAssociationsByObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Association })
  associations?: shared.Association[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
