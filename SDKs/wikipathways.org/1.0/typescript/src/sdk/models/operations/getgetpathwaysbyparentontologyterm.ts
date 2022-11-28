import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetPathwaysByParentOntologyTermFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetPathwaysByParentOntologyTermQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetPathwaysByParentOntologyTermFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" })
  term: string;
}


export class GetGetPathwaysByParentOntologyTermRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetPathwaysByParentOntologyTermQueryParams;
}


export class GetGetPathwaysByParentOntologyTermResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
