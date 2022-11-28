import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteEarningByEarningCodeAndStartDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=earningCode" })
  earningCode: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startDate" })
  startDate: string;
}


export class DeleteEarningByEarningCodeAndStartDateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class DeleteEarningByEarningCodeAndStartDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteEarningByEarningCodeAndStartDatePathParams;

  @SpeakeasyMetadata()
  security: DeleteEarningByEarningCodeAndStartDateSecurity;
}


export class DeleteEarningByEarningCodeAndStartDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
