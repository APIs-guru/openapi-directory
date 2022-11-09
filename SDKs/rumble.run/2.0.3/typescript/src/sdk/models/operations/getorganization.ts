import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrganizationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  security: GetOrganizationSecurity;
}


export class GetOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  organization?: shared.Organization;

  @Metadata()
  statusCode: number;
}
