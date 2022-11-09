import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddClientSecretSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddClientSecretRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddClientSecret;

  @Metadata()
  security: AddClientSecretSecurity;
}


export class AddClientSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ClientCredentialsResponse })
  clientCredentialsResponses?: shared.ClientCredentialsResponse[];

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
