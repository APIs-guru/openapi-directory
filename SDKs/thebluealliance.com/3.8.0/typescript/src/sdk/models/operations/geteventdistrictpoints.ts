import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventDistrictPointsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventDistrictPointsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventDistrictPointsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventDistrictPointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventDistrictPointsPathParams;

  @SpeakeasyMetadata()
  headers: GetEventDistrictPointsHeaders;

  @SpeakeasyMetadata()
  security: GetEventDistrictPointsSecurity;
}


export class GetEventDistrictPointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventDistrictPoints?: shared.EventDistrictPoints;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
