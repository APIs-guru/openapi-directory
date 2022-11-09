import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostCommentsIdDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCommentsIdDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=preview" })
  preview?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class PostCommentsIdDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCommentsIdDeletePathParams;

  @Metadata()
  queryParams: PostCommentsIdDeleteQueryParams;
}


export class PostCommentsIdDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
