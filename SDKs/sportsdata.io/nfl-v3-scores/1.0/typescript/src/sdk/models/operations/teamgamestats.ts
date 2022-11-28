import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamGameStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamGameStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamGameStatsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class TeamGameStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamGameStatsPathParams;
}


export class TeamGameStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamGames?: any[];
}
