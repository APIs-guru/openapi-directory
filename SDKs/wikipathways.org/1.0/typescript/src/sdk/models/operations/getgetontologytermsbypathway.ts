import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetOntologyTermsByPathwayFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetOntologyTermsByPathwayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetOntologyTermsByPathwayFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;
}


export class GetGetOntologyTermsByPathwayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetOntologyTermsByPathwayQueryParams;
}


export class GetGetOntologyTermsByPathwayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
