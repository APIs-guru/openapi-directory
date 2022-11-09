import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetPathwaysByOntologyTermFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetPathwaysByOntologyTermQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwaysByOntologyTermFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=term" })
  term: string;
}


export class GetGetPathwaysByOntologyTermRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetPathwaysByOntologyTermQueryParams;
}


export class GetGetPathwaysByOntologyTermResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
