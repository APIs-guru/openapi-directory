import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class GetGroupSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetGroupSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetGroupSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetGroupSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetGroupSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetGroupSecurityOption3;
}


export class GetGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupPathParams;

  @Metadata()
  security: GetGroupSecurity;
}


export class GetGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
