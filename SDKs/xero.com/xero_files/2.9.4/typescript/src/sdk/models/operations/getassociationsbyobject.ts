import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAssociationsByObjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ObjectId" })
  objectId: string;
}


export class GetAssociationsByObjectHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssociationsByObjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssociationsByObjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAssociationsByObjectPathParams;

  @Metadata()
  headers: GetAssociationsByObjectHeaders;

  @Metadata()
  security: GetAssociationsByObjectSecurity;
}


export class GetAssociationsByObjectResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Association })
  associations?: shared.Association[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
