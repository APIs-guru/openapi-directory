import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubmitStoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=content" })
  content: string;

  @Metadata({ data: "multipart_form, name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "multipart_form, name=photo_ids" })
  photoIds?: string;

  @Metadata({ data: "multipart_form, name=sharing" })
  sharing: string;

  @Metadata({ data: "multipart_form, name=title" })
  title: string;
}


export class SubmitStoryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: SubmitStoryRequestBody;
}


export class SubmitStoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  story?: shared.Story;
}
