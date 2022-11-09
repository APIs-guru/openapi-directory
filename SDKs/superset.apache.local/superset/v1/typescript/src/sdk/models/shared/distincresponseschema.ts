import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DistinctResultResponse } from "./distinctresultresponse";


export class DistincResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=result", elemType: shared.DistinctResultResponse })
  result?: DistinctResultResponse[];
}
