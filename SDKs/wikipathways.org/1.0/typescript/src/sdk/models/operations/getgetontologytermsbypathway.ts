import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetOntologyTermsByPathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetOntologyTermsByPathwayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetOntologyTermsByPathwayFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;
}


export class GetGetOntologyTermsByPathwayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetOntologyTermsByPathwayQueryParams;
}


export class GetGetOntologyTermsByPathwayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
