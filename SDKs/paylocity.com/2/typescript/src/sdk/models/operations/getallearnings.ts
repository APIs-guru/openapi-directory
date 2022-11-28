import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllEarningsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class GetAllEarningsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllEarningsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllEarningsPathParams;

  @SpeakeasyMetadata()
  security: GetAllEarningsSecurity;
}


export class GetAllEarningsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Earning })
  earnings?: shared.Earning[];

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
