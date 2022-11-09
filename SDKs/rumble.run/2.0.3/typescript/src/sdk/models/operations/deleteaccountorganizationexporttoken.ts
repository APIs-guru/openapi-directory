import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAccountOrganizationExportTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class DeleteAccountOrganizationExportTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteAccountOrganizationExportTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAccountOrganizationExportTokenPathParams;

  @Metadata()
  security: DeleteAccountOrganizationExportTokenSecurity;
}


export class DeleteAccountOrganizationExportTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
