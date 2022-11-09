import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCustomerGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class DeleteCustomerGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteCustomerGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCustomerGroupPathParams;

  @Metadata()
  security: DeleteCustomerGroupSecurity;
}


export class DeleteCustomerGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCustomerGroupResponse?: shared.DeleteCustomerGroupResponse;

  @Metadata()
  statusCode: number;
}
