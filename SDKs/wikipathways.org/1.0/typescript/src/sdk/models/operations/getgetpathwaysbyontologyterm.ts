import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetPathwaysByOntologyTermFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetPathwaysByOntologyTermQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwaysByOntologyTermFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" })
  term: string;
}


export class GetGetPathwaysByOntologyTermRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetPathwaysByOntologyTermQueryParams;
}


export class GetGetPathwaysByOntologyTermResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
