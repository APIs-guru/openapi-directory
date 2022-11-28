import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamMatchesByYearKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamMatchesByYearKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMatchesByYearKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMatchesByYearKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamMatchesByYearKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamMatchesByYearKeysHeaders;

  @SpeakeasyMetadata()
  security: GetTeamMatchesByYearKeysSecurity;
}


export class GetTeamMatchesByYearKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTeamMatchesByYearKeys200ApplicationJsonStrings?: string[];
}
