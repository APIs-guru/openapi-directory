import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AlbumApiGetCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AlbumApiGetCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AlbumApiGetCommentsPathParams;
}


export class AlbumApiGetCommentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata({ elemType: shared.CommentForApiContract })
  commentForApiContracts?: shared.CommentForApiContract[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
