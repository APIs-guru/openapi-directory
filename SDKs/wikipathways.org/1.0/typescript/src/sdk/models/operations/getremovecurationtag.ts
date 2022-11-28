import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRemoveCurationTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetRemoveCurationTagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetRemoveCurationTagFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" })
  tagName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class GetRemoveCurationTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRemoveCurationTagQueryParams;
}


export class GetRemoveCurationTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
