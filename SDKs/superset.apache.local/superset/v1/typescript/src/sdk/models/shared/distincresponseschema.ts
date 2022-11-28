import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistinctResultResponse } from "./distinctresultresponse";



export class DistincResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=result", elemType: DistinctResultResponse })
  result?: DistinctResultResponse[];
}
