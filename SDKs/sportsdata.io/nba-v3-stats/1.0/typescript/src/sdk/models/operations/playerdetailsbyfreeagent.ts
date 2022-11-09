import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerDetailsByFreeAgentFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerDetailsByFreeAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByFreeAgentFormatEnum;
}


export class PlayerDetailsByFreeAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerDetailsByFreeAgentPathParams;
}


export class PlayerDetailsByFreeAgentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  players?: any[];

  @Metadata()
  statusCode: number;
}
