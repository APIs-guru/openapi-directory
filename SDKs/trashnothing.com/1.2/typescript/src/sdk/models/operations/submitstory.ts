import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubmitStoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=photo_ids" })
  photoIds?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=sharing" })
  sharing: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=title" })
  title: string;
}


export class SubmitStoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: SubmitStoryRequestBody;
}


export class SubmitStoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  story?: shared.Story;
}
