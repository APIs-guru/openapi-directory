import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFindInteractionsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetFindInteractionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFindInteractionsFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetFindInteractionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFindInteractionsQueryParams;
}


export class GetFindInteractionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
