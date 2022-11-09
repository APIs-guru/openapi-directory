import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddGroupToCustomerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class AddGroupToCustomerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddGroupToCustomerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddGroupToCustomerPathParams;

  @Metadata()
  security: AddGroupToCustomerSecurity;
}


export class AddGroupToCustomerResponse extends SpeakeasyBase {
  @Metadata()
  addGroupToCustomerResponse?: shared.AddGroupToCustomerResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
