import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AlbumApiGetReviewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AlbumApiGetReviewsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;
}


export class AlbumApiGetReviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AlbumApiGetReviewsPathParams;

  @SpeakeasyMetadata()
  queryParams: AlbumApiGetReviewsQueryParams;
}


export class AlbumApiGetReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AlbumReviewContract })
  albumReviewContracts?: shared.AlbumReviewContract[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
