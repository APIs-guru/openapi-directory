import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerDetailsByActiveFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerDetailsByActivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByActiveFormatEnum;
}


export class PlayerDetailsByActiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerDetailsByActivePathParams;
}


export class PlayerDetailsByActiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  players?: any[];

  @Metadata()
  statusCode: number;
}
