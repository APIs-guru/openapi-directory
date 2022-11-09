import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListEmployeeRolesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=batch_token" })
  batchToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;
}


export class ListEmployeeRolesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListEmployeeRolesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEmployeeRolesQueryParams;

  @Metadata()
  security: ListEmployeeRolesSecurity;
}


export class ListEmployeeRolesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.V1EmployeeRole })
  v1EmployeeRoles?: shared.V1EmployeeRole[];
}
