import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerDetailsByActiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerDetailsByActivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByActiveFormatEnum;
}


export class PlayerDetailsByActiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerDetailsByActivePathParams;
}


export class PlayerDetailsByActiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  players?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
