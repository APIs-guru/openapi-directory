import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetPathwayAsFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetPathwayAsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fileType" })
  fileType: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwayAsFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision?: number;
}


export class GetGetPathwayAsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetPathwayAsQueryParams;
}


export class GetGetPathwayAsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
