import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IdpFantasyPlayersWithAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class IdpFantasyPlayersWithAdpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: IdpFantasyPlayersWithAdpFormatEnum;
}


export class IdpFantasyPlayersWithAdpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IdpFantasyPlayersWithAdpPathParams;
}


export class IdpFantasyPlayersWithAdpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fantasyPlayers?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
