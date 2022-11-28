import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetXrefListFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetXrefListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetXrefListFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;
}


export class GetGetXrefListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetXrefListQueryParams;
}


export class GetGetXrefListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
