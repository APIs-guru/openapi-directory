import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetPathwayFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetPathwayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwayFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision?: number;
}


export class GetGetPathwayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetPathwayQueryParams;
}


export class GetGetPathwayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
