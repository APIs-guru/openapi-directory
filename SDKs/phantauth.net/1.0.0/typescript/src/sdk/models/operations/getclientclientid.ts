import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetClientClientIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class GetClientClientIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClientClientIdPathParams;
}


export class GetClientClientId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=@id" })
  atId?: string;

  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=client_name" })
  clientName?: string;

  @Metadata({ data: "json, name=client_secret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=client_uri" })
  clientUri?: string;

  @Metadata({ data: "json, name=contacts" })
  contacts?: any[];

  @Metadata({ data: "json, name=grant_types" })
  grantTypes?: any[];

  @Metadata({ data: "json, name=jwks" })
  jwks?: any[];

  @Metadata({ data: "json, name=jwks_uri" })
  jwksUri?: string;

  @Metadata({ data: "json, name=logo_email" })
  logoEmail?: string;

  @Metadata({ data: "json, name=logo_uri" })
  logoUri?: string;

  @Metadata({ data: "json, name=policy_uri" })
  policyUri?: string;

  @Metadata({ data: "json, name=redirect_uris" })
  redirectUris?: any[];

  @Metadata({ data: "json, name=response_types" })
  responseTypes?: any[];

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=software_id" })
  softwareId?: string;

  @Metadata({ data: "json, name=software_version" })
  softwareVersion?: string;

  @Metadata({ data: "json, name=token_endpoint_auth_method" })
  tokenEndpointAuthMethod?: string;

  @Metadata({ data: "json, name=tos_uri" })
  tosUri?: string;
}


export class GetClientClientIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getClientClientId200ApplicationJsonObject?: GetClientClientId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
