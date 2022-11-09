import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostListingsSlugFlagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class PostListingsSlugFlagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;
}


export class PostListingsSlugFlagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostListingsSlugFlagPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostListingsSlugFlagRequestBody;
}


export class PostListingsSlugFlagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
