import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddOrUpdateAdditionalRatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdateAdditionalRatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdateAdditionalRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddOrUpdateAdditionalRatesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AdditionalRate;

  @SpeakeasyMetadata()
  security: AddOrUpdateAdditionalRatesSecurity;
}


export class AddOrUpdateAdditionalRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
