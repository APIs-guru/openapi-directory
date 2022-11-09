import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamStatsAllowedByPositionFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class TeamStatsAllowedByPositionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamStatsAllowedByPositionFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TeamStatsAllowedByPositionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamStatsAllowedByPositionPathParams;
}


export class TeamStatsAllowedByPositionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamSeasons?: any[];
}
