import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAccountOrganizationExportTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class DeleteAccountOrganizationExportTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteAccountOrganizationExportTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAccountOrganizationExportTokenPathParams;

  @SpeakeasyMetadata()
  security: DeleteAccountOrganizationExportTokenSecurity;
}


export class DeleteAccountOrganizationExportTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
