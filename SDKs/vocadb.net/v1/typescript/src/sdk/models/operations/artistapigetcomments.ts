import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArtistApiGetCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ArtistApiGetCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArtistApiGetCommentsPathParams;
}


export class ArtistApiGetCommentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata({ elemType: shared.CommentForApiContract })
  commentForApiContracts?: shared.CommentForApiContract[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
