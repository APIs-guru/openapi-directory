import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAccountOrganizationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class CreateAccountOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.OrgOptions;

  @Metadata()
  security: CreateAccountOrganizationSecurity;
}


export class CreateAccountOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  organization?: shared.Organization;

  @Metadata()
  statusCode: number;
}
