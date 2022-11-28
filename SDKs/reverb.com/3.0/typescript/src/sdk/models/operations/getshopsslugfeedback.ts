import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetShopsSlugFeedbackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetShopsSlugFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShopsSlugFeedbackPathParams;
}


export class GetShopsSlugFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
