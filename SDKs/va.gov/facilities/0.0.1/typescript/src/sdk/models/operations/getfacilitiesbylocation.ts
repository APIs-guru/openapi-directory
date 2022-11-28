import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFacilitiesByLocationTypeEnum {
    Health = "health",
    Cemetery = "cemetery",
    Benefits = "benefits",
    VetCenter = "vet_center"
}


export class GetFacilitiesByLocationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox[]" })
  bbox?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=long" })
  long?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mobile" })
  mobile?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=services[]" })
  services?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetFacilitiesByLocationTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visn" })
  visn?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetFacilitiesByLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetFacilitiesByLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFacilitiesByLocationQueryParams;

  @SpeakeasyMetadata()
  security: GetFacilitiesByLocationSecurity;
}


export class GetFacilitiesByLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  facilitiesResponse?: shared.FacilitiesResponse;

  @SpeakeasyMetadata()
  genericError?: shared.GenericError;

  @SpeakeasyMetadata()
  geoFacilitiesResponse?: shared.GeoFacilitiesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
