import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAccountOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class UpdateAccountOrganizationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAccountOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAccountOrganizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OrgOptions;

  @SpeakeasyMetadata()
  security: UpdateAccountOrganizationSecurity;
}


export class UpdateAccountOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organization?: shared.Organization;

  @SpeakeasyMetadata()
  statusCode: number;
}
