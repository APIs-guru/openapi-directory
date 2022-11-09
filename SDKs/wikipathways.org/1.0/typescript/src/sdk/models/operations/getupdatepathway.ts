import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdatePathwayFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class GetUpdatePathwayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetUpdatePathwayFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gpml" })
  gpml: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pwId" })
  pwId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=revision" })
  revision: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class GetUpdatePathwayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdatePathwayQueryParams;
}


export class GetUpdatePathwayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
