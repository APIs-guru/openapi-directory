import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamEventsByYearKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamEventsByYearKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventsByYearKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventsByYearKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamEventsByYearKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamEventsByYearKeysHeaders;

  @SpeakeasyMetadata()
  security: GetTeamEventsByYearKeysSecurity;
}


export class GetTeamEventsByYearKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTeamEventsByYearKeys200ApplicationJsonStrings?: string[];
}
