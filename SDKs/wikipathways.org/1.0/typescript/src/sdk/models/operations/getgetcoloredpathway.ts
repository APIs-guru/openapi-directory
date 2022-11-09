import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetColoredPathwayFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetColoredPathwayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=color" })
  color: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fileType" })
  fileType: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetColoredPathwayFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=graphId" })
  graphId: any[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision: string;
}


export class GetGetColoredPathwayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetColoredPathwayQueryParams;
}


export class GetGetColoredPathwayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
