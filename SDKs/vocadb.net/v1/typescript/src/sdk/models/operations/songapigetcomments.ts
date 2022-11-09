import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SongApiGetCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SongApiGetCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongApiGetCommentsPathParams;
}


export class SongApiGetCommentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata({ elemType: shared.CommentForApiContract })
  commentForApiContracts?: shared.CommentForApiContract[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
