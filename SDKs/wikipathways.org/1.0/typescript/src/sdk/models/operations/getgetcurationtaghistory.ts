import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetCurationTagHistoryFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetCurationTagHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetCurationTagHistoryFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: string;
}


export class GetGetCurationTagHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetCurationTagHistoryQueryParams;
}


export class GetGetCurationTagHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
