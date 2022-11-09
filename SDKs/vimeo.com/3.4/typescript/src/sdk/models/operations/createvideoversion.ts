import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVideoVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}

export enum CreateVideoVersionRequestBodyUploadApproachEnum {
    Post = "post"
,    Pull = "pull"
,    Streaming = "streaming"
,    Tus = "tus"
}


export class CreateVideoVersionRequestBodyUpload extends SpeakeasyBase {
  @Metadata({ data: "json, name=approach" })
  approach: CreateVideoVersionRequestBodyUploadApproachEnum;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;
}


export class CreateVideoVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=file_name" })
  fileName: string;

  @Metadata({ data: "json, name=upload" })
  upload: CreateVideoVersionRequestBodyUpload;
}


export class CreateVideoVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVideoVersionPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.video.version+json" })
  request: CreateVideoVersionRequestBody;
}


export class CreateVideoVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  videoVersions?: shared.VideoVersions;
}
