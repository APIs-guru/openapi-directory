import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEarningsByEarningCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=earningCode" })
  earningCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class GetEarningsByEarningCodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetEarningsByEarningCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEarningsByEarningCodePathParams;

  @SpeakeasyMetadata()
  security: GetEarningsByEarningCodeSecurity;
}


export class GetEarningsByEarningCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Earning })
  earnings?: shared.Earning[];

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
