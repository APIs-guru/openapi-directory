import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerDetailsByAvailableFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerDetailsByAvailablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByAvailableFormatEnum;
}


export class PlayerDetailsByAvailableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerDetailsByAvailablePathParams;
}


export class PlayerDetailsByAvailableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  players?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
