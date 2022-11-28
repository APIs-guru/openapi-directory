import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAllFacilitiesAcceptEnum {
    ApplicationGeoPlusJson = "application/geo+json",
    ApplicationVndGeoPlusJson = "application/vnd.geo+json",
    TextCsv = "text/csv"
}


export class GetAllFacilitiesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: GetAllFacilitiesAcceptEnum;
}


export class GetAllFacilitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetAllFacilitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetAllFacilitiesHeaders;

  @SpeakeasyMetadata()
  security: GetAllFacilitiesSecurity;
}


export class GetAllFacilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  genericError?: shared.GenericError;

  @SpeakeasyMetadata()
  geoFacilitiesResponse?: shared.GeoFacilitiesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllFacilities200TextCsvString?: string;
}
