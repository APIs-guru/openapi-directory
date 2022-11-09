import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChartFavStarResponseResult } from "./chartfavstarresponseresult";


export class GetFavStarIdsSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: shared.ChartFavStarResponseResult })
  result?: ChartFavStarResponseResult[];
}
