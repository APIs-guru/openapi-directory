import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectedPlayerSeasonStatsWithAdpFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsWithAdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsWithAdpFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProjectedPlayerSeasonStatsWithAdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectedPlayerSeasonStatsWithAdpPathParams;
}


export class ProjectedPlayerSeasonStatsWithAdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasonProjections?: any[];

  @Metadata()
  statusCode: number;
}
