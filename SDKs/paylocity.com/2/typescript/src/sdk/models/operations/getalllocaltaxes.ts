import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllLocalTaxesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class GetAllLocalTaxesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllLocalTaxesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllLocalTaxesPathParams;

  @SpeakeasyMetadata()
  security: GetAllLocalTaxesSecurity;
}


export class GetAllLocalTaxesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @SpeakeasyMetadata({ elemType: shared.LocalTax })
  localTaxes?: shared.LocalTax[];
}
