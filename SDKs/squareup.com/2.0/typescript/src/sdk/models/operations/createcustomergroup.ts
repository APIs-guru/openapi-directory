import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCustomerGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCustomerGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCustomerGroupRequest;

  @Metadata()
  security: CreateCustomerGroupSecurity;
}


export class CreateCustomerGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCustomerGroupResponse?: shared.CreateCustomerGroupResponse;

  @Metadata()
  statusCode: number;
}
