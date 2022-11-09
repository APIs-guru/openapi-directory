import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFindPathwaysByTextFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetFindPathwaysByTextQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFindPathwaysByTextFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=species" })
  species?: string;
}


export class GetFindPathwaysByTextRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFindPathwaysByTextQueryParams;
}


export class GetFindPathwaysByTextResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
