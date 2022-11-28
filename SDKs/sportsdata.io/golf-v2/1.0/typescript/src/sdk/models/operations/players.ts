import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayersFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayersFormatEnum;
}


export class PlayersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayersPathParams;
}


export class PlayersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  players?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
