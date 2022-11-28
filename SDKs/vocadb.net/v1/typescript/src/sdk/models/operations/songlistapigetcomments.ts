import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SongListApiGetCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listId" })
  listId: number;
}


export class SongListApiGetCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SongListApiGetCommentsPathParams;
}


export class SongListApiGetCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
