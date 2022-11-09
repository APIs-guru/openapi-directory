import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerDetailsByTeamFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerDetailsByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class PlayerDetailsByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerDetailsByTeamPathParams;
}


export class PlayerDetailsByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerDetails?: any[];

  @Metadata()
  statusCode: number;
}
