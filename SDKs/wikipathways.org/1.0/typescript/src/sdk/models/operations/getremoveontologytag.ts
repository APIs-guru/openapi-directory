import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRemoveOntologyTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetRemoveOntologyTagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetRemoveOntologyTagFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=termId" })
  termId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user: string;
}


export class GetRemoveOntologyTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRemoveOntologyTagQueryParams;
}


export class GetRemoveOntologyTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
