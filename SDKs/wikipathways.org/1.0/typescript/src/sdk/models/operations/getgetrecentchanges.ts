import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetRecentChangesFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetRecentChangesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetRecentChangesFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class GetGetRecentChangesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetRecentChangesQueryParams;
}


export class GetGetRecentChangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
