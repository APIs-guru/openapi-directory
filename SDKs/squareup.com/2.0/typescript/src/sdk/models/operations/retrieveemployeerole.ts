import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveEmployeeRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: string;
}


export class RetrieveEmployeeRoleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveEmployeeRoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveEmployeeRolePathParams;

  @Metadata()
  security: RetrieveEmployeeRoleSecurity;
}


export class RetrieveEmployeeRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1EmployeeRole?: shared.V1EmployeeRole;
}
