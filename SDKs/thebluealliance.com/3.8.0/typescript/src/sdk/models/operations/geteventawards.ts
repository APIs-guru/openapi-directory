import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventAwardsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventAwardsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventAwardsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventAwardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventAwardsPathParams;

  @SpeakeasyMetadata()
  headers: GetEventAwardsHeaders;

  @SpeakeasyMetadata()
  security: GetEventAwardsSecurity;
}


export class GetEventAwardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Award })
  awards?: shared.Award[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
