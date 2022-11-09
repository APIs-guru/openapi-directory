import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostCommentsIdEditPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCommentsIdEditQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=body" })
  body?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=preview" })
  preview?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class PostCommentsIdEditRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCommentsIdEditPathParams;

  @Metadata()
  queryParams: PostCommentsIdEditQueryParams;
}


export class PostCommentsIdEditResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
