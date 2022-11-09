import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAccountOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org_id" })
  orgId: string;
}


export class UpdateAccountOrganizationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAccountOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAccountOrganizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.OrgOptions;

  @Metadata()
  security: UpdateAccountOrganizationSecurity;
}


export class UpdateAccountOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  organization?: shared.Organization;

  @Metadata()
  statusCode: number;
}
