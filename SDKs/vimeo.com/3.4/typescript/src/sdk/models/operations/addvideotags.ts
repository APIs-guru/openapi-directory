import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideoTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoTagsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;
}


export class AddVideoTagsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideoTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideoTagsPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.tag+json" })
  request: AddVideoTagsRequestBody;

  @Metadata()
  security: AddVideoTagsSecurity;
}


export class AddVideoTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.Tag })
  tags?: shared.Tag[];
}
