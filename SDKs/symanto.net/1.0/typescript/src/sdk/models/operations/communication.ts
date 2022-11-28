import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CommunicationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;
}


export class CommunicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CommunicationQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Post })
  request?: shared.Post[];
}


export class CommunicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PostPredicted })
  predictionResults?: shared.PostPredicted[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrors?: shared.ValidationErrors;
}
