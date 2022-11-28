import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEarningByEarningCodeAndStartDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=earningCode" })
  earningCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: string;
}


export class GetEarningByEarningCodeAndStartDateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetEarningByEarningCodeAndStartDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEarningByEarningCodeAndStartDatePathParams;

  @SpeakeasyMetadata()
  security: GetEarningByEarningCodeAndStartDateSecurity;
}


export class GetEarningByEarningCodeAndStartDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  earning?: shared.Earning;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
