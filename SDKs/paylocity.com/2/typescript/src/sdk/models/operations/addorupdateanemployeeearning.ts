import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddOrUpdateAnEmployeeEarningPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdateAnEmployeeEarningSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdateAnEmployeeEarningRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddOrUpdateAnEmployeeEarningPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Earning;

  @Metadata()
  security: AddOrUpdateAnEmployeeEarningSecurity;
}


export class AddOrUpdateAnEmployeeEarningResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
