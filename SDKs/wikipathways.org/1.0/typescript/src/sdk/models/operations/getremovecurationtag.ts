import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRemoveCurationTagFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetRemoveCurationTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetRemoveCurationTagFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class GetRemoveCurationTagRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoveCurationTagQueryParams;
}


export class GetRemoveCurationTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
