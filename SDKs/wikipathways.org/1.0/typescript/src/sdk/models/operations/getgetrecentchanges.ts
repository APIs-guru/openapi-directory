import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetRecentChangesFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetRecentChangesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetRecentChangesFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class GetGetRecentChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetRecentChangesQueryParams;
}


export class GetGetRecentChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
