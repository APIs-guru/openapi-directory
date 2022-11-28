import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApi10CalculateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Itinerary })
  request?: shared.Itinerary[];
}


export class PostApi10CalculateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CalculateResult })
  calculateResults?: shared.CalculateResult[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
