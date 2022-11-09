import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAllFacilitiesAcceptEnum {
    ApplicationGeoPlusJson = "application/geo+json"
,    ApplicationVndGeoPlusJson = "application/vnd.geo+json"
,    TextCsv = "text/csv"
}


export class GetAllFacilitiesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: GetAllFacilitiesAcceptEnum;
}


export class GetAllFacilitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetAllFacilitiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAllFacilitiesHeaders;

  @Metadata()
  security: GetAllFacilitiesSecurity;
}


export class GetAllFacilitiesResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  genericError?: shared.GenericError;

  @Metadata()
  geoFacilitiesResponse?: shared.GeoFacilitiesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAllFacilities200TextCsvString?: string;
}
