import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChampionsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class ChampionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ChampionsFormatEnum;
}


export class ChampionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChampionsPathParams;
}


export class ChampionsResponse extends SpeakeasyBase {
  @Metadata()
  champions?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
