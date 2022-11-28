import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerDetailsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerDetailsByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByTeamFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class PlayerDetailsByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerDetailsByTeamPathParams;
}


export class PlayerDetailsByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerDetails?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
