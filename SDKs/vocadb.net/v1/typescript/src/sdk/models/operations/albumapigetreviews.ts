import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AlbumApiGetReviewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AlbumApiGetReviewsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;
}


export class AlbumApiGetReviewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AlbumApiGetReviewsPathParams;

  @Metadata()
  queryParams: AlbumApiGetReviewsQueryParams;
}


export class AlbumApiGetReviewsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AlbumReviewContract })
  albumReviewContracts?: shared.AlbumReviewContract[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
