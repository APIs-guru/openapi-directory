import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AllStarsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class AllStarsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: AllStarsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class AllStarsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AllStarsPathParams;
}


export class AllStarsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerInfos?: any[];

  @Metadata()
  statusCode: number;
}
