import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventOpRsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventOpRsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventOpRsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventOpRsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventOpRsPathParams;

  @Metadata()
  headers: GetEventOpRsHeaders;

  @Metadata()
  security: GetEventOpRsSecurity;
}


export class GetEventOpRsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventOpRs?: shared.EventOpRs;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
