import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSaveCurationTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetSaveCurationTagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetSaveCurationTagFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class GetSaveCurationTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSaveCurationTagQueryParams;
}


export class GetSaveCurationTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
