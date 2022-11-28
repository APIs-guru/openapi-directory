import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllDirectDepositPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class GetAllDirectDepositSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllDirectDepositRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllDirectDepositPathParams;

  @SpeakeasyMetadata()
  security: GetAllDirectDepositSecurity;
}


export class GetAllDirectDepositResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.DirectDeposit })
  directDeposits?: shared.DirectDeposit[];

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
