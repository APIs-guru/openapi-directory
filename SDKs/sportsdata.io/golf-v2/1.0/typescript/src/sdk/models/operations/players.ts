import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayersFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayersFormatEnum;
}


export class PlayersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayersPathParams;
}


export class PlayersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  players?: any[];

  @Metadata()
  statusCode: number;
}
