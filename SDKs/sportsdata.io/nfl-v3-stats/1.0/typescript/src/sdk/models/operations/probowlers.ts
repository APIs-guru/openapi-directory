import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProBowlersFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ProBowlersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ProBowlersFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ProBowlersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProBowlersPathParams;
}


export class ProBowlersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerInfos?: any[];

  @Metadata()
  statusCode: number;
}
