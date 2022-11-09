import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveCustomerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}


export class RetrieveCustomerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveCustomerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveCustomerPathParams;

  @Metadata()
  security: RetrieveCustomerSecurity;
}


export class RetrieveCustomerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveCustomerResponse?: shared.RetrieveCustomerResponse;

  @Metadata()
  statusCode: number;
}
