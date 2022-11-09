import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetCurationTagsByNameFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetCurationTagsByNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetCurationTagsByNameFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName: string;
}


export class GetGetCurationTagsByNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetCurationTagsByNameQueryParams;
}


export class GetGetCurationTagsByNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
