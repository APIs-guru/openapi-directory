import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RotateAccountOrganizationExportTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class RotateAccountOrganizationExportTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RotateAccountOrganizationExportTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RotateAccountOrganizationExportTokenPathParams;

  @SpeakeasyMetadata()
  security: RotateAccountOrganizationExportTokenSecurity;
}


export class RotateAccountOrganizationExportTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organization?: shared.Organization;

  @SpeakeasyMetadata()
  statusCode: number;
}
