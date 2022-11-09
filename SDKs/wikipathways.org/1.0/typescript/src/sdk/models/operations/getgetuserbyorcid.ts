import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetUserByOrcidFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetGetUserByOrcidQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetGetUserByOrcidFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orcid" })
  orcid: string;
}


export class GetGetUserByOrcidRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetUserByOrcidQueryParams;
}


export class GetGetUserByOrcidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
