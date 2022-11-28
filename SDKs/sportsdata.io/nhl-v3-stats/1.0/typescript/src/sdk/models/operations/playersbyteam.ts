import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayersByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayersByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayersByTeamFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class PlayersByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayersByTeamPathParams;
}


export class PlayersByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  players?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
