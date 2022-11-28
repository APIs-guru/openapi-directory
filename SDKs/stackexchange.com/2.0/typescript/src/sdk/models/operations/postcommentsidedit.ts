import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCommentsIdEditPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCommentsIdEditQueryParams extends SpeakeasyBase {
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


export class PostCommentsIdEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCommentsIdEditPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCommentsIdEditQueryParams;
}


export class PostCommentsIdEditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
