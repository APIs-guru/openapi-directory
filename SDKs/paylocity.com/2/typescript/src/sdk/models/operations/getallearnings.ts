import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllEarningsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class GetAllEarningsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllEarningsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllEarningsPathParams;

  @Metadata()
  security: GetAllEarningsSecurity;
}


export class GetAllEarningsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Earning })
  earnings?: shared.Earning[];

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
