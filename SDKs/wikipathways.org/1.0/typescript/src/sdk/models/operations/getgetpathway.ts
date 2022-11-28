import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetPathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetPathwayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwayFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision?: number;
}


export class GetGetPathwayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetPathwayQueryParams;
}


export class GetGetPathwayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
