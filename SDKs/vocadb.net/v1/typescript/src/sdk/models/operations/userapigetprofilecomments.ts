import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetProfileCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiGetProfileCommentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class UserApiGetProfileCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetProfileCommentsPathParams;

  @Metadata()
  queryParams: UserApiGetProfileCommentsQueryParams;
}


export class UserApiGetProfileCommentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;

  @Metadata()
  statusCode: number;
}
