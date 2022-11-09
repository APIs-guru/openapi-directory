import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListOrganismsFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetListOrganismsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetListOrganismsFormatEnum;
}


export class GetListOrganismsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListOrganismsQueryParams;
}


export class GetListOrganismsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
