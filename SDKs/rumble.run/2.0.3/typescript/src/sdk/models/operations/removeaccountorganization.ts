import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveAccountOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class RemoveAccountOrganizationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveAccountOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveAccountOrganizationPathParams;

  @SpeakeasyMetadata()
  security: RemoveAccountOrganizationSecurity;
}


export class RemoveAccountOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
