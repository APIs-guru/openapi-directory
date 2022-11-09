import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMatchZebraPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=match_key" })
  matchKey: string;
}


export class GetMatchZebraHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetMatchZebraSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetMatchZebraRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMatchZebraPathParams;

  @Metadata()
  headers: GetMatchZebraHeaders;

  @Metadata()
  security: GetMatchZebraSecurity;
}


export class GetMatchZebraResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  zebra?: shared.Zebra;
}
