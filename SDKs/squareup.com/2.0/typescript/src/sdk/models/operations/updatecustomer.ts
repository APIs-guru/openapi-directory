import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCustomerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}


export class UpdateCustomerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateCustomerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCustomerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomerRequest;

  @Metadata()
  security: UpdateCustomerSecurity;
}


export class UpdateCustomerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCustomerResponse?: shared.UpdateCustomerResponse;
}
