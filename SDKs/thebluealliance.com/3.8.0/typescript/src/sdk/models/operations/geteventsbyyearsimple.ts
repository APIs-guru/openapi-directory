import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsByYearSimplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetEventsByYearSimpleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventsByYearSimpleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventsByYearSimpleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventsByYearSimplePathParams;

  @Metadata()
  headers: GetEventsByYearSimpleHeaders;

  @Metadata()
  security: GetEventsByYearSimpleSecurity;
}


export class GetEventsByYearSimpleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.EventSimple })
  eventSimples?: shared.EventSimple[];

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
