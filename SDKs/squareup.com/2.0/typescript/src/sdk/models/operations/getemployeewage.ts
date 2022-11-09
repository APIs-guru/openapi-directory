import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmployeeWagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEmployeeWageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetEmployeeWageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmployeeWagePathParams;

  @Metadata()
  security: GetEmployeeWageSecurity;
}


export class GetEmployeeWageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getEmployeeWageResponse?: shared.GetEmployeeWageResponse;

  @Metadata()
  statusCode: number;
}
