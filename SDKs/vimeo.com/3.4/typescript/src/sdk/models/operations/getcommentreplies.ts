import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommentRepliesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetCommentRepliesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetCommentRepliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommentRepliesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCommentRepliesQueryParams;
}


export class GetCommentRepliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Comment })
  comments?: shared.Comment[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
