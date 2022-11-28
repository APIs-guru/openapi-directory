import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFindPathwaysByLiteratureFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetFindPathwaysByLiteratureQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFindPathwaysByLiteratureFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetFindPathwaysByLiteratureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFindPathwaysByLiteratureQueryParams;
}


export class GetFindPathwaysByLiteratureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
