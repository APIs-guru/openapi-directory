import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamSeasonStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamSeasonStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamSeasonStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TeamSeasonStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamSeasonStatsPathParams;
}


export class TeamSeasonStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamSeasons?: any[];
}
