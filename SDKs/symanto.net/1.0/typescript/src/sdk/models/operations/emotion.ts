import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EmotionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;
}


export class EmotionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EmotionQueryParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Post })
  request?: shared.Post[];
}


export class EmotionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PostPredicted })
  predictionResults?: shared.PostPredicted[];

  @Metadata()
  statusCode: number;

  @Metadata()
  validationErrors?: shared.ValidationErrors;
}
