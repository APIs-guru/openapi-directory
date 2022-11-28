import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DfsSlatesByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class DfsSlatesByWeekPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DfsSlatesByWeekFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class DfsSlatesByWeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfsSlatesByWeekPathParams;
}


export class DfsSlatesByWeekResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dfsSlates?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
