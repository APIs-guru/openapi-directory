import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListOrganismsFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetListOrganismsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetListOrganismsFormatEnum;
}


export class GetListOrganismsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListOrganismsQueryParams;
}


export class GetListOrganismsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
