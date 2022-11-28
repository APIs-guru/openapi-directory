import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamEventsKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamEventsKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventsKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventsKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamEventsKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamEventsKeysHeaders;

  @SpeakeasyMetadata()
  security: GetTeamEventsKeysSecurity;
}


export class GetTeamEventsKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTeamEventsKeys200ApplicationJsonStrings?: string[];
}
