import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsByYearSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetEventsByYearSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventsByYearSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventsByYearSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventsByYearSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetEventsByYearSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetEventsByYearSimpleSecurity;
}


export class GetEventsByYearSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.EventSimple })
  eventSimples?: shared.EventSimple[];

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
