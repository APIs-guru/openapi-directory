import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveGroupFromCustomerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class RemoveGroupFromCustomerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveGroupFromCustomerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveGroupFromCustomerPathParams;

  @Metadata()
  security: RemoveGroupFromCustomerSecurity;
}


export class RemoveGroupFromCustomerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  removeGroupFromCustomerResponse?: shared.RemoveGroupFromCustomerResponse;

  @Metadata()
  statusCode: number;
}
