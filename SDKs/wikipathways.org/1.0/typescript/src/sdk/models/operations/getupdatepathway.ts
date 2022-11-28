import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdatePathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetUpdatePathwayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetUpdatePathwayFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gpml" })
  gpml: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class GetUpdatePathwayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdatePathwayQueryParams;
}


export class GetUpdatePathwayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
