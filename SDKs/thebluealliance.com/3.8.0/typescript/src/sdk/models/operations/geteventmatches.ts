import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventMatchesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventMatchesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventMatchesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventMatchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventMatchesPathParams;

  @SpeakeasyMetadata()
  headers: GetEventMatchesHeaders;

  @SpeakeasyMetadata()
  security: GetEventMatchesSecurity;
}


export class GetEventMatchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.Match })
  matches?: shared.Match[];

  @SpeakeasyMetadata()
  statusCode: number;
}
