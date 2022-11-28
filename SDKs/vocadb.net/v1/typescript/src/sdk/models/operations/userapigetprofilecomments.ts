import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetProfileCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiGetProfileCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class UserApiGetProfileCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetProfileCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiGetProfileCommentsQueryParams;
}


export class UserApiGetProfileCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
