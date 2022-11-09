import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventDistrictPointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventDistrictPointsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventDistrictPointsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventDistrictPointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventDistrictPointsPathParams;

  @Metadata()
  headers: GetEventDistrictPointsHeaders;

  @Metadata()
  security: GetEventDistrictPointsSecurity;
}


export class GetEventDistrictPointsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventDistrictPoints?: shared.EventDistrictPoints;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
