import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectedPlayerSeasonStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ProjectedPlayerSeasonStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProjectedPlayerSeasonStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProjectedPlayerSeasonStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectedPlayerSeasonStatsPathParams;
}


export class ProjectedPlayerSeasonStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasonProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
