import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetPathwayAsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetPathwayAsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fileType" })
  fileType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwayAsFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision?: number;
}


export class GetGetPathwayAsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetPathwayAsQueryParams;
}


export class GetGetPathwayAsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
