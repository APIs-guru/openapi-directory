import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamEventMatchesKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamEventMatchesKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventMatchesKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventMatchesKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamEventMatchesKeysPathParams;

  @Metadata()
  headers: GetTeamEventMatchesKeysHeaders;

  @Metadata()
  security: GetTeamEventMatchesKeysSecurity;
}


export class GetTeamEventMatchesKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeamEventMatchesKeys200ApplicationJsonStrings?: string[];
}
