import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelatedResultResponse } from "./relatedresultresponse";



export class RelatedResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=result", elemType: RelatedResultResponse })
  result?: RelatedResultResponse[];
}
