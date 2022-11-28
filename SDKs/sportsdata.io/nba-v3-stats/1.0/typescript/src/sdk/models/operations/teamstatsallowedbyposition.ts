import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TeamStatsAllowedByPositionFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class TeamStatsAllowedByPositionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TeamStatsAllowedByPositionFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class TeamStatsAllowedByPositionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamStatsAllowedByPositionPathParams;
}


export class TeamStatsAllowedByPositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamSeasons?: any[];
}
