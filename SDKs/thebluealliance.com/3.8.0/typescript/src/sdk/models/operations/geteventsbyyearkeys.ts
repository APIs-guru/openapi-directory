import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsByYearKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetEventsByYearKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventsByYearKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventsByYearKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventsByYearKeysPathParams;

  @Metadata()
  headers: GetEventsByYearKeysHeaders;

  @Metadata()
  security: GetEventsByYearKeysSecurity;
}


export class GetEventsByYearKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEventsByYearKeys200ApplicationJsonStrings?: string[];
}
