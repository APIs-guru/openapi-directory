import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetListingsSlugSimilarListingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetListingsSlugSimilarListingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingsSlugSimilarListingsPathParams;
}


export class GetListingsSlugSimilarListingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
