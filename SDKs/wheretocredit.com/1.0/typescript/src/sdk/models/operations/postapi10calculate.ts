import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApi10CalculateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.Itinerary })
  request?: shared.Itinerary[];
}


export class PostApi10CalculateResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.CalculateResult })
  calculateResults?: shared.CalculateResult[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
