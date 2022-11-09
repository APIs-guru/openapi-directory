import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventAwardsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventAwardsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventAwardsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventAwardsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventAwardsPathParams;

  @Metadata()
  headers: GetEventAwardsHeaders;

  @Metadata()
  security: GetEventAwardsSecurity;
}


export class GetEventAwardsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Award })
  awards?: shared.Award[];

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
