import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVideoVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum CreateVideoVersionRequestBodyUploadApproachEnum {
    Post = "post",
    Pull = "pull",
    Streaming = "streaming",
    Tus = "tus"
}


export class CreateVideoVersionRequestBodyUpload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approach" })
  approach: CreateVideoVersionRequestBodyUploadApproachEnum;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;
}


export class CreateVideoVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName: string;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload: CreateVideoVersionRequestBodyUpload;
}


export class CreateVideoVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVideoVersionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.video.version+json" })
  request: CreateVideoVersionRequestBody;
}


export class CreateVideoVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  videoVersions?: shared.VideoVersions;
}
