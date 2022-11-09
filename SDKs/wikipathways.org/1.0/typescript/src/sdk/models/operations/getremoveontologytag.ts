import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRemoveOntologyTagFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetRemoveOntologyTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetRemoveOntologyTagFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=termId" })
  termId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user: string;
}


export class GetRemoveOntologyTagRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoveOntologyTagQueryParams;
}


export class GetRemoveOntologyTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
