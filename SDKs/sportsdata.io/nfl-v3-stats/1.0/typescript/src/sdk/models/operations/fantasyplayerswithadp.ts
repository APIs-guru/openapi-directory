import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FantasyPlayersWithAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class FantasyPlayersWithAdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: FantasyPlayersWithAdpFormatEnum;
}


export class FantasyPlayersWithAdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FantasyPlayersWithAdpPathParams;
}


export class FantasyPlayersWithAdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fantasyPlayers?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
