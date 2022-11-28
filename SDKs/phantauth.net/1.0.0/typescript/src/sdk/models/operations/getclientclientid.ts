import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetClientClientIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class GetClientClientId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@id" })
  atId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=client_name" })
  clientName?: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=client_uri" })
  clientUri?: string;

  @SpeakeasyMetadata({ data: "json, name=contacts" })
  contacts?: any[];

  @SpeakeasyMetadata({ data: "json, name=grant_types" })
  grantTypes?: any[];

  @SpeakeasyMetadata({ data: "json, name=jwks" })
  jwks?: any[];

  @SpeakeasyMetadata({ data: "json, name=jwks_uri" })
  jwksUri?: string;

  @SpeakeasyMetadata({ data: "json, name=logo_email" })
  logoEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=logo_uri" })
  logoUri?: string;

  @SpeakeasyMetadata({ data: "json, name=policy_uri" })
  policyUri?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_uris" })
  redirectUris?: any[];

  @SpeakeasyMetadata({ data: "json, name=response_types" })
  responseTypes?: any[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=software_id" })
  softwareId?: string;

  @SpeakeasyMetadata({ data: "json, name=software_version" })
  softwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=token_endpoint_auth_method" })
  tokenEndpointAuthMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=tos_uri" })
  tosUri?: string;
}


export class GetClientClientIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClientClientIdPathParams;
}


export class GetClientClientIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getClientClientId200ApplicationJsonObject?: GetClientClientId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
