import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCreatePathwayFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Html = "html"
,    Dump = "dump"
,    Jpg = "jpg"
,    Pdf = "pdf"
}


export class PostCreatePathwayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PostCreatePathwayFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gpml" })
  gpml: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class PostCreatePathwayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCreatePathwayQueryParams;
}


export class PostCreatePathwayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
