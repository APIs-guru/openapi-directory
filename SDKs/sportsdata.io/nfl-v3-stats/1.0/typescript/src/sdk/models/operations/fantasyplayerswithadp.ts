import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FantasyPlayersWithAdpFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class FantasyPlayersWithAdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyPlayersWithAdpFormatEnum;
}


export class FantasyPlayersWithAdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FantasyPlayersWithAdpPathParams;
}


export class FantasyPlayersWithAdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fantasyPlayers?: any[];

  @Metadata()
  statusCode: number;
}
