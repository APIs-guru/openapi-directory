import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFindPathwaysByLiteratureFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetFindPathwaysByLiteratureQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFindPathwaysByLiteratureFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetFindPathwaysByLiteratureRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFindPathwaysByLiteratureQueryParams;
}


export class GetFindPathwaysByLiteratureResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
