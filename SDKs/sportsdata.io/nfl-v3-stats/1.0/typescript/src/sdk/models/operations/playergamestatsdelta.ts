import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerGameStatsDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerGameStatsDeltaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsDeltaFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;
}


export class PlayerGameStatsDeltaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerGameStatsDeltaPathParams;
}


export class PlayerGameStatsDeltaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGames?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
