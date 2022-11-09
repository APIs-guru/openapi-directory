import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictEventsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictEventsPathParams;

  @Metadata()
  headers: GetDistrictEventsHeaders;

  @Metadata()
  security: GetDistrictEventsSecurity;
}


export class GetDistrictEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
