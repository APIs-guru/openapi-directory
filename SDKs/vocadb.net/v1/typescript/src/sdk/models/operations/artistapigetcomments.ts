import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArtistApiGetCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ArtistApiGetCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArtistApiGetCommentsPathParams;
}


export class ArtistApiGetCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata({ elemType: shared.CommentForApiContract })
  commentForApiContracts?: shared.CommentForApiContract[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
