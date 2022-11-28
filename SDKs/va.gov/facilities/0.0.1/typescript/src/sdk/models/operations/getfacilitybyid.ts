import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFacilityByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFacilityByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetFacilityByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFacilityByIdPathParams;

  @SpeakeasyMetadata()
  security: GetFacilityByIdSecurity;
}


export class GetFacilityByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  facilityReadResponse?: shared.FacilityReadResponse;

  @SpeakeasyMetadata()
  genericError?: shared.GenericError;

  @SpeakeasyMetadata()
  geoFacilityReadResponse?: shared.GeoFacilityReadResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
