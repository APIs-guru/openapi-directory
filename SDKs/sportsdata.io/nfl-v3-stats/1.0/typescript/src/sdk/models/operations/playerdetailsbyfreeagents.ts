import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerDetailsByFreeAgentsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerDetailsByFreeAgentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerDetailsByFreeAgentsFormatEnum;
}


export class PlayerDetailsByFreeAgentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerDetailsByFreeAgentsPathParams;
}


export class PlayerDetailsByFreeAgentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  players?: any[];

  @Metadata()
  statusCode: number;
}
