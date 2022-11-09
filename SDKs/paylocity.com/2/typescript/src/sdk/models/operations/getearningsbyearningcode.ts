import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEarningsByEarningCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=earningCode" })
  earningCode: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class GetEarningsByEarningCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetEarningsByEarningCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEarningsByEarningCodePathParams;

  @Metadata()
  security: GetEarningsByEarningCodeSecurity;
}


export class GetEarningsByEarningCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Earning })
  earnings?: shared.Earning[];

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
