import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayersByTeamFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class PlayersByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayersByTeamFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamid" })
  teamid: string;
}


export class PlayersByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayersByTeamPathParams;
}


export class PlayersByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  players?: any[];

  @Metadata()
  statusCode: number;
}
