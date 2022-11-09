import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommentRepliesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetCommentRepliesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetCommentRepliesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommentRepliesPathParams;

  @Metadata()
  queryParams: GetCommentRepliesQueryParams;
}


export class GetCommentRepliesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Comment })
  comments?: shared.Comment[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
