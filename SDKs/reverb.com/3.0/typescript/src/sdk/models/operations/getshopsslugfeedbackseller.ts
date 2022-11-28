import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetShopsSlugFeedbackSellerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetShopsSlugFeedbackSellerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShopsSlugFeedbackSellerPathParams;
}


export class GetShopsSlugFeedbackSellerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
