import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetShopsSlugFeedbackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetShopsSlugFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShopsSlugFeedbackPathParams;
}


export class GetShopsSlugFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
