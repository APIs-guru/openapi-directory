import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteEarningByEarningCodeAndStartDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=earningCode" })
  earningCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: string;
}


export class DeleteEarningByEarningCodeAndStartDateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class DeleteEarningByEarningCodeAndStartDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteEarningByEarningCodeAndStartDatePathParams;

  @Metadata()
  security: DeleteEarningByEarningCodeAndStartDateSecurity;
}


export class DeleteEarningByEarningCodeAndStartDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
