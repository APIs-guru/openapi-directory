import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSaveCurationTagFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetSaveCurationTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetSaveCurationTagFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class GetSaveCurationTagRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSaveCurationTagQueryParams;
}


export class GetSaveCurationTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
