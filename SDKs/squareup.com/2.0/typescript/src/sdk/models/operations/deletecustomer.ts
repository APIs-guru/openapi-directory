import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCustomerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;
}


export class DeleteCustomerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: number;
}


export class DeleteCustomerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteCustomerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCustomerPathParams;

  @Metadata()
  queryParams: DeleteCustomerQueryParams;

  @Metadata()
  security: DeleteCustomerSecurity;
}


export class DeleteCustomerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCustomerResponse?: shared.DeleteCustomerResponse;

  @Metadata()
  statusCode: number;
}
