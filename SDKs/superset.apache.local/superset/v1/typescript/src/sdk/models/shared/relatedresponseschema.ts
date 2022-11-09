import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelatedResultResponse } from "./relatedresultresponse";


export class RelatedResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=result", elemType: shared.RelatedResultResponse })
  result?: RelatedResultResponse[];
}
