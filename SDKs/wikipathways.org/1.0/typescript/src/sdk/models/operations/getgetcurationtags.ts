import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetCurationTagsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetCurationTagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetCurationTagsFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;
}


export class GetGetCurationTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetCurationTagsQueryParams;
}


export class GetGetCurationTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
