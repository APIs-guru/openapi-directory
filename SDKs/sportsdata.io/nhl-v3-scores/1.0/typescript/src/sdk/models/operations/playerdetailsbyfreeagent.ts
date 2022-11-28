import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerDetailsByFreeAgentFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerDetailsByFreeAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByFreeAgentFormatEnum;
}


export class PlayerDetailsByFreeAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerDetailsByFreeAgentPathParams;
}


export class PlayerDetailsByFreeAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  players?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
