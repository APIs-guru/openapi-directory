import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFacilityByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFacilityByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetFacilityByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFacilityByIdPathParams;

  @Metadata()
  security: GetFacilityByIdSecurity;
}


export class GetFacilityByIdResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  facilityReadResponse?: shared.FacilityReadResponse;

  @Metadata()
  genericError?: shared.GenericError;

  @Metadata()
  geoFacilityReadResponse?: shared.GeoFacilityReadResponse;

  @Metadata()
  statusCode: number;
}
