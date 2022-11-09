import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetCurationTagsFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetCurationTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetCurationTagsFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;
}


export class GetGetCurationTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetCurationTagsQueryParams;
}


export class GetGetCurationTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
