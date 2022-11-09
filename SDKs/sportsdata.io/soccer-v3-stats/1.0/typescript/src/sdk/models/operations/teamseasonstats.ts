import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TeamSeasonStatsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class TeamSeasonStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamSeasonStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=roundid" })
  roundid: string;
}


export class TeamSeasonStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamSeasonStatsPathParams;
}


export class TeamSeasonStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamSeasons?: any[];
}
