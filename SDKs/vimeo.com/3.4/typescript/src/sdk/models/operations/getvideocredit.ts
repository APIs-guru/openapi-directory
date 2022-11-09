import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideoCreditPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credit_id" })
  creditId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoCreditRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoCreditPathParams;
}


export class GetVideoCreditResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  credit?: shared.Credit;

  @Metadata()
  legacyError?: shared.LegacyError;
}
