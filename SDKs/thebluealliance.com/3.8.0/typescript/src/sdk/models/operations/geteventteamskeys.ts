import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventTeamsKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventTeamsKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventTeamsKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventTeamsKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventTeamsKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetEventTeamsKeysHeaders;

  @SpeakeasyMetadata()
  security: GetEventTeamsKeysSecurity;
}


export class GetEventTeamsKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEventTeamsKeys200ApplicationJsonStrings?: string[];
}
