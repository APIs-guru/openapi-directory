import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventMatchesKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventMatchesKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventMatchesKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventMatchesKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventMatchesKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetEventMatchesKeysHeaders;

  @SpeakeasyMetadata()
  security: GetEventMatchesKeysSecurity;
}


export class GetEventMatchesKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEventMatchesKeys200ApplicationJsonStrings?: string[];
}
