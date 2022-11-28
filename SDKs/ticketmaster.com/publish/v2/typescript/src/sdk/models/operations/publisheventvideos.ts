import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishEventVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PublishEventVideosHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishEventVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PublishEventVideosPathParams;

  @SpeakeasyMetadata()
  headers: PublishEventVideosHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Video;
}


export class PublishEventVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
