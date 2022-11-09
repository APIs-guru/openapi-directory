import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagApiGetCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagApiGetCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagApiGetCommentsPathParams;
}


export class TagApiGetCommentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;

  @Metadata()
  statusCode: number;
}
