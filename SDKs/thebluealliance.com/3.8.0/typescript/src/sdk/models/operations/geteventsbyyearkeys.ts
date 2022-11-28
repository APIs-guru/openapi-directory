import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsByYearKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetEventsByYearKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventsByYearKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventsByYearKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventsByYearKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetEventsByYearKeysHeaders;

  @SpeakeasyMetadata()
  security: GetEventsByYearKeysSecurity;
}


export class GetEventsByYearKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEventsByYearKeys200ApplicationJsonStrings?: string[];
}
