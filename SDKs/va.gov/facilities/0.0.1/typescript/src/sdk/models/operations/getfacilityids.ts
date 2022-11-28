import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFacilityIdsTypeEnum {
    Health = "health",
    Cemetery = "cemetery",
    Benefits = "benefits",
    VetCenter = "vet_center"
}


export class GetFacilityIdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetFacilityIdsTypeEnum;
}


export class GetFacilityIdsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetFacilityIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFacilityIdsQueryParams;

  @SpeakeasyMetadata()
  security: GetFacilityIdsSecurity;
}


export class GetFacilityIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  facilitiesIdsResponse?: shared.FacilitiesIdsResponse;

  @SpeakeasyMetadata()
  genericError?: shared.GenericError;

  @SpeakeasyMetadata()
  statusCode: number;
}
