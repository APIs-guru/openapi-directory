import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddClientSecretSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddClientSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddClientSecret;

  @SpeakeasyMetadata()
  security: AddClientSecretSecurity;
}


export class AddClientSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ClientCredentialsResponse })
  clientCredentialsResponses?: shared.ClientCredentialsResponse[];

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
