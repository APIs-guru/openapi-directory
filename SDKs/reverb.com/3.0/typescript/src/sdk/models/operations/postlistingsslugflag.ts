import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostListingsSlugFlagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class PostListingsSlugFlagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;
}


export class PostListingsSlugFlagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostListingsSlugFlagPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostListingsSlugFlagRequestBody;
}


export class PostListingsSlugFlagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
