import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SuggestVideoCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class SuggestVideoCategoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: string[];
}


export class SuggestVideoCategorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SuggestVideoCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SuggestVideoCategoryPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.category+json" })
  request: SuggestVideoCategoryRequestBody;

  @Metadata()
  security: SuggestVideoCategorySecurity;
}


export class SuggestVideoCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  category?: shared.Category;

  @Metadata()
  legacyError?: shared.LegacyError;
}
