import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV2EmployeesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV2EmployeesIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetV2EmployeesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV2EmployeesIdPathParams;

  @Metadata()
  security: GetV2EmployeesIdSecurity;
}


export class GetV2EmployeesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveEmployeeResponse?: shared.RetrieveEmployeeResponse;

  @Metadata()
  statusCode: number;
}
