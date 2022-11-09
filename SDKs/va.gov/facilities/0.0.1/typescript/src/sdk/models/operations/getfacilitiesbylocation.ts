import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFacilitiesByLocationTypeEnum {
    Health = "health"
,    Cemetery = "cemetery"
,    Benefits = "benefits"
,    VetCenter = "vet_center"
}


export class GetFacilitiesByLocationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bbox[]" })
  bbox?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=long" })
  long?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mobile" })
  mobile?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=services[]" })
  services?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetFacilitiesByLocationTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=visn" })
  visn?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetFacilitiesByLocationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetFacilitiesByLocationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFacilitiesByLocationQueryParams;

  @Metadata()
  security: GetFacilitiesByLocationSecurity;
}


export class GetFacilitiesByLocationResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  facilitiesResponse?: shared.FacilitiesResponse;

  @Metadata()
  genericError?: shared.GenericError;

  @Metadata()
  geoFacilitiesResponse?: shared.GeoFacilitiesResponse;

  @Metadata()
  statusCode: number;
}
