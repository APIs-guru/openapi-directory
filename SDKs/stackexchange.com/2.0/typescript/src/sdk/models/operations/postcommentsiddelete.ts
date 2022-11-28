import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCommentsIdDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCommentsIdDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview" })
  preview?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class PostCommentsIdDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCommentsIdDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: PostCommentsIdDeleteQueryParams;
}


export class PostCommentsIdDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
