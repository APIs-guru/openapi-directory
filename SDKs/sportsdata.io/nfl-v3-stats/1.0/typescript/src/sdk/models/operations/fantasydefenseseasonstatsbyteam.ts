import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FantasyDefenseSeasonStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class FantasyDefenseSeasonStatsByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyDefenseSeasonStatsByTeamFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class FantasyDefenseSeasonStatsByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FantasyDefenseSeasonStatsByTeamPathParams;
}


export class FantasyDefenseSeasonStatsByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fantasyDefenseSeason?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
