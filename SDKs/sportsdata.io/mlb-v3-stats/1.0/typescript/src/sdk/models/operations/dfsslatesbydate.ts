import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DfsSlatesByDateFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class DfsSlatesByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DfsSlatesByDateFormatEnum;
}


export class DfsSlatesByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfsSlatesByDatePathParams;
}


export class DfsSlatesByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dfsSlates?: any[];

  @Metadata()
  statusCode: number;
}
