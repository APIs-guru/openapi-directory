import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetShopsSlugFeedbackSellerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetShopsSlugFeedbackSellerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShopsSlugFeedbackSellerPathParams;
}


export class GetShopsSlugFeedbackSellerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
