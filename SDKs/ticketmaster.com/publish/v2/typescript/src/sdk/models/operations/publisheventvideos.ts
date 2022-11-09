import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishEventVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PublishEventVideosHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=TMPS-Correlation-Id" })
  tmpsCorrelationId: string;
}


export class PublishEventVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishEventVideosPathParams;

  @Metadata()
  headers: PublishEventVideosHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Video;
}


export class PublishEventVideosResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
