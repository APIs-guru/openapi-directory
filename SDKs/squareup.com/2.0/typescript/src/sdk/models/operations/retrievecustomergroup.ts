import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveCustomerGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class RetrieveCustomerGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveCustomerGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveCustomerGroupPathParams;

  @Metadata()
  security: RetrieveCustomerGroupSecurity;
}


export class RetrieveCustomerGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveCustomerGroupResponse?: shared.RetrieveCustomerGroupResponse;

  @Metadata()
  statusCode: number;
}
