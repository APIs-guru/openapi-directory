import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OauthV1OpenidDiscovery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorization_endpoint" })
  authorizationEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=claims_supported" })
  claimsSupported?: string[];

  @SpeakeasyMetadata({ data: "json, name=device_authorization_endpoint" })
  deviceAuthorizationEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=id_token_signing_alg_values_supported" })
  idTokenSigningAlgValuesSupported?: string[];

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=jwk_uri" })
  jwkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=response_type_supported" })
  responseTypeSupported?: string[];

  @SpeakeasyMetadata({ data: "json, name=revocation_endpoint" })
  revocationEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes_supported" })
  scopesSupported?: string[];

  @SpeakeasyMetadata({ data: "json, name=subject_type_supported" })
  subjectTypeSupported?: string[];

  @SpeakeasyMetadata({ data: "json, name=token_endpoint" })
  tokenEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=userinfo_endpoint" })
  userinfoEndpoint?: string;
}
