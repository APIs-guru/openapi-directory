import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetShopsSlugFeedbackBuyerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetShopsSlugFeedbackBuyerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShopsSlugFeedbackBuyerPathParams;
}


export class GetShopsSlugFeedbackBuyerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
