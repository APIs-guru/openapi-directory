import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEmployeeRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: string;
}


export class UpdateEmployeeRoleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateEmployeeRoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEmployeeRolePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.V1EmployeeRole;

  @Metadata()
  security: UpdateEmployeeRoleSecurity;
}


export class UpdateEmployeeRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1EmployeeRole?: shared.V1EmployeeRole;
}
