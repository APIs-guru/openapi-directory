import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagApiGetCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class TagApiGetCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagApiGetCommentsPathParams;
}


export class TagApiGetCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
