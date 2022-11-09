import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InjuriesHistoricalFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class InjuriesHistoricalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: InjuriesHistoricalFormatEnum;
}


export class InjuriesHistoricalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InjuriesHistoricalPathParams;
}


export class InjuriesHistoricalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  injuries?: any[];

  @Metadata()
  statusCode: number;
}
