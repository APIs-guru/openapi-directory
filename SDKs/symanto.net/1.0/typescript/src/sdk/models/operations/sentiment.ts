import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SentimentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;
}


export class SentimentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SentimentQueryParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Post })
  request?: shared.Post[];
}


export class SentimentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PostPredicted })
  predictionResults?: shared.PostPredicted[];

  @Metadata()
  statusCode: number;

  @Metadata()
  validationErrors?: shared.ValidationErrors;
}
