import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishAttractionVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PublishAttractionVideosHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishAttractionVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishAttractionVideosPathParams;

  @Metadata()
  headers: PublishAttractionVideosHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Video;
}


export class PublishAttractionVideosResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
