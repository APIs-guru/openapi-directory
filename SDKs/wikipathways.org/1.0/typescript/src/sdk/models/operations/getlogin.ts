import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetLoginFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetLoginQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetLoginFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pass" })
  pass: string;
}


export class GetLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLoginQueryParams;
}


export class GetLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
