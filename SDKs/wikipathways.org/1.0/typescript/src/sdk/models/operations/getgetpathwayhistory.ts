import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetPathwayHistoryFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetPathwayHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwayHistoryFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class GetGetPathwayHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetPathwayHistoryQueryParams;
}


export class GetGetPathwayHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
