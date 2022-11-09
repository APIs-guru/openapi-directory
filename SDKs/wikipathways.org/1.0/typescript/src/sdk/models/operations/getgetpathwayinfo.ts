import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetPathwayInfoFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetPathwayInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwayInfoFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;
}


export class GetGetPathwayInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetPathwayInfoQueryParams;
}


export class GetGetPathwayInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
