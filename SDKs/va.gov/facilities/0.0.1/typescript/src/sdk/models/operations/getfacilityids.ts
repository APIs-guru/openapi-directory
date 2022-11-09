import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFacilityIdsTypeEnum {
    Health = "health"
,    Cemetery = "cemetery"
,    Benefits = "benefits"
,    VetCenter = "vet_center"
}


export class GetFacilityIdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetFacilityIdsTypeEnum;
}


export class GetFacilityIdsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetFacilityIdsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFacilityIdsQueryParams;

  @Metadata()
  security: GetFacilityIdsSecurity;
}


export class GetFacilityIdsResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  facilitiesIdsResponse?: shared.FacilitiesIdsResponse;

  @Metadata()
  genericError?: shared.GenericError;

  @Metadata()
  statusCode: number;
}
