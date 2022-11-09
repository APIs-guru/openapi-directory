import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventMatchesKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventMatchesKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventMatchesKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventMatchesKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventMatchesKeysPathParams;

  @Metadata()
  headers: GetEventMatchesKeysHeaders;

  @Metadata()
  security: GetEventMatchesKeysSecurity;
}


export class GetEventMatchesKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEventMatchesKeys200ApplicationJsonStrings?: string[];
}
