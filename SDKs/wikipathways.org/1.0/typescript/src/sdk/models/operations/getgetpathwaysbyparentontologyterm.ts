import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetPathwaysByParentOntologyTermFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetPathwaysByParentOntologyTermQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwaysByParentOntologyTermFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=term" })
  term: string;
}


export class GetGetPathwaysByParentOntologyTermRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetPathwaysByParentOntologyTermQueryParams;
}


export class GetGetPathwaysByParentOntologyTermResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
