import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IdpFantasyPlayersWithAdpFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class IdpFantasyPlayersWithAdpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: IdpFantasyPlayersWithAdpFormatEnum;
}


export class IdpFantasyPlayersWithAdpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IdpFantasyPlayersWithAdpPathParams;
}


export class IdpFantasyPlayersWithAdpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fantasyPlayers?: any[];

  @Metadata()
  statusCode: number;
}
