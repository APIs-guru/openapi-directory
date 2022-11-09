import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SeriesFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class SeriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SeriesFormatEnum;
}


export class SeriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SeriesPathParams;
}


export class SeriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  series?: any[];

  @Metadata()
  statusCode: number;
}
