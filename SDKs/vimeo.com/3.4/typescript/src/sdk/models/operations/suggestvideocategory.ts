import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SuggestVideoCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class SuggestVideoCategoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: string[];
}


export class SuggestVideoCategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SuggestVideoCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SuggestVideoCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.category+json" })
  request: SuggestVideoCategoryRequestBody;

  @SpeakeasyMetadata()
  security: SuggestVideoCategorySecurity;
}


export class SuggestVideoCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  category?: shared.Category;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
