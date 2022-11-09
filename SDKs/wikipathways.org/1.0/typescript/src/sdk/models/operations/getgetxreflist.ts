import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetXrefListFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetXrefListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetXrefListFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;
}


export class GetGetXrefListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetXrefListQueryParams;
}


export class GetGetXrefListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
