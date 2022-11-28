import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetCurationTagsByNameFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetCurationTagsByNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetCurationTagsByNameFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName: string;
}


export class GetGetCurationTagsByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetCurationTagsByNameQueryParams;
}


export class GetGetCurationTagsByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
