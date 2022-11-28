import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddOrUpdateAnEmployeeEarningPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdateAnEmployeeEarningSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdateAnEmployeeEarningRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddOrUpdateAnEmployeeEarningPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Earning;

  @SpeakeasyMetadata()
  security: AddOrUpdateAnEmployeeEarningSecurity;
}


export class AddOrUpdateAnEmployeeEarningResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
