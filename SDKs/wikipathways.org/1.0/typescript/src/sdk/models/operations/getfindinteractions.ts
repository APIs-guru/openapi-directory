import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFindInteractionsFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetFindInteractionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFindInteractionsFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetFindInteractionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFindInteractionsQueryParams;
}


export class GetFindInteractionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
