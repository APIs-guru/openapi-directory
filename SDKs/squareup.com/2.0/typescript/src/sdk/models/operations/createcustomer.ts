import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCustomerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCustomerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCustomerRequest;

  @Metadata()
  security: CreateCustomerSecurity;
}


export class CreateCustomerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCustomerResponse?: shared.CreateCustomerResponse;

  @Metadata()
  statusCode: number;
}
