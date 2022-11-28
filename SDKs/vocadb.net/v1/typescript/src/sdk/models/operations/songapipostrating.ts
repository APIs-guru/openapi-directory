import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SongApiPostRatingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SongApiPostRatingRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  songRatingContract?: shared.SongRatingContract;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  songRatingContract1?: shared.SongRatingContract;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  songRatingContract2?: shared.SongRatingContract;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class SongApiPostRatingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SongApiPostRatingPathParams;

  @SpeakeasyMetadata()
  request: SongApiPostRatingRequests;
}


export class SongApiPostRatingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
