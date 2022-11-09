import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCustomerCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}


export class CreateCustomerCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCustomerCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCustomerCardPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCustomerCardRequest;

  @Metadata()
  security: CreateCustomerCardSecurity;
}


export class CreateCustomerCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCustomerCardResponse?: shared.CreateCustomerCardResponse;

  @Metadata()
  statusCode: number;
}
