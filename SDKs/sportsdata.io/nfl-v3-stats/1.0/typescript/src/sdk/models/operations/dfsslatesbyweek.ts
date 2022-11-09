import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DfsSlatesByWeekFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class DfsSlatesByWeekPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DfsSlatesByWeekFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class DfsSlatesByWeekRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfsSlatesByWeekPathParams;
}


export class DfsSlatesByWeekResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dfsSlates?: any[];

  @Metadata()
  statusCode: number;
}
