import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CommunicationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;
}


export class CommunicationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CommunicationQueryParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Post })
  request?: shared.Post[];
}


export class CommunicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PostPredicted })
  predictionResults?: shared.PostPredicted[];

  @Metadata()
  statusCode: number;

  @Metadata()
  validationErrors?: shared.ValidationErrors;
}
