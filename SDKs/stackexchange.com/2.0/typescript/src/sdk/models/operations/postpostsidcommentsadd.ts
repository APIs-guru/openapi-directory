import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPostsIdCommentsAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostPostsIdCommentsAddQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview" })
  preview?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class PostPostsIdCommentsAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPostsIdCommentsAddPathParams;

  @SpeakeasyMetadata()
  queryParams: PostPostsIdCommentsAddQueryParams;
}


export class PostPostsIdCommentsAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
