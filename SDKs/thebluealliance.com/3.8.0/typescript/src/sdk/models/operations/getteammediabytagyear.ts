import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamMediaByTagYearPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=media_tag" })
  mediaTag: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamMediaByTagYearHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamMediaByTagYearSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamMediaByTagYearRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamMediaByTagYearPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamMediaByTagYearHeaders;

  @SpeakeasyMetadata()
  security: GetTeamMediaByTagYearSecurity;
}


export class GetTeamMediaByTagYearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.Media })
  media?: shared.Media[];

  @SpeakeasyMetadata()
  statusCode: number;
}
