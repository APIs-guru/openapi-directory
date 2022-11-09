import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SongListApiGetCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=listId" })
  listId: number;
}


export class SongListApiGetCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongListApiGetCommentsPathParams;
}


export class SongListApiGetCommentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultCommentForApiContract?: shared.PartialFindResultCommentForApiContract;

  @Metadata()
  statusCode: number;
}
