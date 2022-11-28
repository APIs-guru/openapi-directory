import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostCreatePathwayFormatEnum {
    Json = "json",
    Xml = "xml",
    Html = "html",
    Dump = "dump",
    Jpg = "jpg",
    Pdf = "pdf"
}


export class PostCreatePathwayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth" })
  auth: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PostCreatePathwayFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gpml" })
  gpml: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class PostCreatePathwayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCreatePathwayQueryParams;
}


export class PostCreatePathwayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
