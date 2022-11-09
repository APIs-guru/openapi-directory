import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSaveOntologyTagFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetSaveOntologyTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetSaveOntologyTagFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=term" })
  term: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=termId" })
  termId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user: string;
}


export class GetSaveOntologyTagRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSaveOntologyTagQueryParams;
}


export class GetSaveOntologyTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
