import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetCurationTagHistoryFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetCurationTagHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetCurationTagHistoryFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: string;
}


export class GetGetCurationTagHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetCurationTagHistoryQueryParams;
}


export class GetGetCurationTagHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
