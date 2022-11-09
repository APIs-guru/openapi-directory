import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEarningByEarningCodeAndStartDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=earningCode" })
  earningCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: string;
}


export class GetEarningByEarningCodeAndStartDateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetEarningByEarningCodeAndStartDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEarningByEarningCodeAndStartDatePathParams;

  @Metadata()
  security: GetEarningByEarningCodeAndStartDateSecurity;
}


export class GetEarningByEarningCodeAndStartDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  earning?: shared.Earning;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
