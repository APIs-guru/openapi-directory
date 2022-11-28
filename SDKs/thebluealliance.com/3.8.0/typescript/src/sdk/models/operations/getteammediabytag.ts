import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamMediaByTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=media_tag" })
  mediaTag: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamMediaByTagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMediaByTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMediaByTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamMediaByTagPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamMediaByTagHeaders;

  @SpeakeasyMetadata()
  security: GetTeamMediaByTagSecurity;
}


export class GetTeamMediaByTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.Media })
  media?: shared.Media[];

  @SpeakeasyMetadata()
  statusCode: number;
}
