import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishAttractionVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PublishAttractionVideosHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishAttractionVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PublishAttractionVideosPathParams;

  @SpeakeasyMetadata()
  headers: PublishAttractionVideosHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Video;
}


export class PublishAttractionVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
