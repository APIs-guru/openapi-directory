import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerDetailsByAvailableFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerDetailsByAvailablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByAvailableFormatEnum;
}


export class PlayerDetailsByAvailableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerDetailsByAvailablePathParams;
}


export class PlayerDetailsByAvailableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  players?: any[];

  @Metadata()
  statusCode: number;
}
