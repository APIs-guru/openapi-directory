import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamGameStatsByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamGameStatsByWeekPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamGameStatsByWeekFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class TeamGameStatsByWeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamGameStatsByWeekPathParams;
}


export class TeamGameStatsByWeekResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamGames?: any[];
}
