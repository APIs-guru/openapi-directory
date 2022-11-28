import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetListingsSlugSimilarListingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetListingsSlugSimilarListingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingsSlugSimilarListingsPathParams;
}


export class GetListingsSlugSimilarListingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
