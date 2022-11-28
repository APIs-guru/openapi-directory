import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamSocialMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamSocialMediaHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamSocialMediaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamSocialMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamSocialMediaPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamSocialMediaHeaders;

  @SpeakeasyMetadata()
  security: GetTeamSocialMediaSecurity;
}


export class GetTeamSocialMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.Media })
  media?: shared.Media[];

  @SpeakeasyMetadata()
  statusCode: number;
}
