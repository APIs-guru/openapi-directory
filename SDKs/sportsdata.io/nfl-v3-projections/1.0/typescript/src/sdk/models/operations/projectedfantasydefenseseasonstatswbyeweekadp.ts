import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams;
}


export class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fantasyDefenseSeasonProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
