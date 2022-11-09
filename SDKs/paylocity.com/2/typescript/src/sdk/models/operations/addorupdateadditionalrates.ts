import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddOrUpdateAdditionalRatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class AddOrUpdateAdditionalRatesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddOrUpdateAdditionalRatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddOrUpdateAdditionalRatesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdditionalRate;

  @Metadata()
  security: AddOrUpdateAdditionalRatesSecurity;
}


export class AddOrUpdateAdditionalRatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
