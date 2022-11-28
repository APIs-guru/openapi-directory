import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FantasyDefenseGameStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class FantasyDefenseGameStatsByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyDefenseGameStatsByTeamFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class FantasyDefenseGameStatsByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FantasyDefenseGameStatsByTeamPathParams;
}


export class FantasyDefenseGameStatsByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fantasyDefenseGame?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
