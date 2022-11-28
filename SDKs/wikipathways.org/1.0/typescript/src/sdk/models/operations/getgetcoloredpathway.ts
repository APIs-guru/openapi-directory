import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetColoredPathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetColoredPathwayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=color" })
  color: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fileType" })
  fileType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetColoredPathwayFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=graphId" })
  graphId: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision: string;
}


export class GetGetColoredPathwayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetColoredPathwayQueryParams;
}


export class GetGetColoredPathwayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
