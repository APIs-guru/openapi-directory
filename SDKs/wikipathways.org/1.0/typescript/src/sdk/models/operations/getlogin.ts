import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetLoginFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetLoginQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLoginFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pass" })
  pass: string;
}


export class GetLoginRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLoginQueryParams;
}


export class GetLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
