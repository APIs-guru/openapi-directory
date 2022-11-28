import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoCreditPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credit_id" })
  creditId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoCreditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoCreditPathParams;
}


export class GetVideoCreditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  credit?: shared.Credit;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
