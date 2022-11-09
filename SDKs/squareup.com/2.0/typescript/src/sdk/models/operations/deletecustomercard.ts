import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCustomerCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=card_id" })
  cardId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}


export class DeleteCustomerCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteCustomerCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCustomerCardPathParams;

  @Metadata()
  security: DeleteCustomerCardSecurity;
}


export class DeleteCustomerCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCustomerCardResponse?: shared.DeleteCustomerCardResponse;

  @Metadata()
  statusCode: number;
}
