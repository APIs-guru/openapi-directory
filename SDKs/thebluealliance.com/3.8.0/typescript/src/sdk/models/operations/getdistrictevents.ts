import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictEventsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictEventsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictEventsPathParams;

  @SpeakeasyMetadata()
  headers: GetDistrictEventsHeaders;

  @SpeakeasyMetadata()
  security: GetDistrictEventsSecurity;
}


export class GetDistrictEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Event })
  events?: shared.Event[];

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
