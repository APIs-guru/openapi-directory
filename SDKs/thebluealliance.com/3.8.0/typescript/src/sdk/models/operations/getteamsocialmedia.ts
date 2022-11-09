import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamSocialMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamSocialMediaHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamSocialMediaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamSocialMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamSocialMediaPathParams;

  @Metadata()
  headers: GetTeamSocialMediaHeaders;

  @Metadata()
  security: GetTeamSocialMediaSecurity;
}


export class GetTeamSocialMediaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.Media })
  media?: shared.Media[];

  @Metadata()
  statusCode: number;
}
