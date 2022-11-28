import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFindPathwaysByXrefFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetFindPathwaysByXrefQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=codes" })
  codes?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFindPathwaysByXrefFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids: any[];
}


export class GetFindPathwaysByXrefRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFindPathwaysByXrefQueryParams;
}


export class GetFindPathwaysByXrefResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
