import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMediaByTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=media_tag" })
  mediaTag: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamMediaByTagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMediaByTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMediaByTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMediaByTagPathParams;

  @Metadata()
  headers: GetTeamMediaByTagHeaders;

  @Metadata()
  security: GetTeamMediaByTagSecurity;
}


export class GetTeamMediaByTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.Media })
  media?: shared.Media[];

  @Metadata()
  statusCode: number;
}
