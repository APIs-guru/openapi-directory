import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFindPathwaysByTextFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetFindPathwaysByTextQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFindPathwaysByTextFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=species" })
  species?: string;
}


export class GetFindPathwaysByTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFindPathwaysByTextQueryParams;
}


export class GetFindPathwaysByTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
