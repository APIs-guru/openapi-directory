import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class ProjectedFantasyDefenseGameStatsWDfsSalariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams;
}


export class ProjectedFantasyDefenseGameStatsWDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fantasyDefenseGameProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
