import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListPathwaysFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetListPathwaysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetListPathwaysFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organism" })
  organism?: string;
}


export class GetListPathwaysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListPathwaysQueryParams;
}


export class GetListPathwaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
