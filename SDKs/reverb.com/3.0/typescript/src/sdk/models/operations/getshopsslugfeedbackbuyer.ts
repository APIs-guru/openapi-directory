import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetShopsSlugFeedbackBuyerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetShopsSlugFeedbackBuyerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShopsSlugFeedbackBuyerPathParams;
}


export class GetShopsSlugFeedbackBuyerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
