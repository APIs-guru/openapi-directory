import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetUserByOrcidFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetGetUserByOrcidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetUserByOrcidFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orcid" })
  orcid: string;
}


export class GetGetUserByOrcidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetUserByOrcidQueryParams;
}


export class GetGetUserByOrcidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
