import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllDirectDepositPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class GetAllDirectDepositSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllDirectDepositRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllDirectDepositPathParams;

  @Metadata()
  security: GetAllDirectDepositSecurity;
}


export class GetAllDirectDepositResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.DirectDeposit })
  directDeposits?: shared.DirectDeposit[];

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
