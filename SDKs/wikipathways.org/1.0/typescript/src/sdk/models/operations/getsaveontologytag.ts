import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSaveOntologyTagFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class GetSaveOntologyTagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetSaveOntologyTagFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" })
  term: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=termId" })
  termId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user: string;
}


export class GetSaveOntologyTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSaveOntologyTagQueryParams;
}


export class GetSaveOntologyTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
