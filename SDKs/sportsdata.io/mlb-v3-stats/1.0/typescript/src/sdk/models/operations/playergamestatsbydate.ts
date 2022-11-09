import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameStatsByDateFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerGameStatsByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsByDateFormatEnum;
}


export class PlayerGameStatsByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameStatsByDatePathParams;
}


export class PlayerGameStatsByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGames?: any[];

  @Metadata()
  statusCode: number;
}
