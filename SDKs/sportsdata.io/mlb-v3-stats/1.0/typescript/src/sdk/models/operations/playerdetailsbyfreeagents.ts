import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerDetailsByFreeAgentsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerDetailsByFreeAgentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByFreeAgentsFormatEnum;
}


export class PlayerDetailsByFreeAgentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerDetailsByFreeAgentsPathParams;
}


export class PlayerDetailsByFreeAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  players?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
