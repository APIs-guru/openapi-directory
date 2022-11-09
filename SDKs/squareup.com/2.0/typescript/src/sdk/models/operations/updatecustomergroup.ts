import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCustomerGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class UpdateCustomerGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateCustomerGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCustomerGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCustomerGroupRequest;

  @Metadata()
  security: UpdateCustomerGroupSecurity;
}


export class UpdateCustomerGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCustomerGroupResponse?: shared.UpdateCustomerGroupResponse;
}
