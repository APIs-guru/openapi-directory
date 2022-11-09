import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListPathwaysFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetListPathwaysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetListPathwaysFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=organism" })
  organism?: string;
}


export class GetListPathwaysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListPathwaysQueryParams;
}


export class GetListPathwaysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
