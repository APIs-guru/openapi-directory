import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RotateAccountOrganizationExportTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class RotateAccountOrganizationExportTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RotateAccountOrganizationExportTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RotateAccountOrganizationExportTokenPathParams;

  @Metadata()
  security: RotateAccountOrganizationExportTokenSecurity;
}


export class RotateAccountOrganizationExportTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  organization?: shared.Organization;

  @Metadata()
  statusCode: number;
}
