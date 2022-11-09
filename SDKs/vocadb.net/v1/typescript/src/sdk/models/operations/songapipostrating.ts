import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SongApiPostRatingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SongApiPostRatingRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  songRatingContract?: shared.SongRatingContract;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  songRatingContract1?: shared.SongRatingContract;

  @Metadata({ data: "request, media_type=text/json" })
  songRatingContract2?: shared.SongRatingContract;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class SongApiPostRatingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SongApiPostRatingPathParams;

  @Metadata()
  request: SongApiPostRatingRequests;
}


export class SongApiPostRatingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
