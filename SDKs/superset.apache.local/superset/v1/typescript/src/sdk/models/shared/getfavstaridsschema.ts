import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartFavStarResponseResult } from "./chartfavstarresponseresult";



export class GetFavStarIdsSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: ChartFavStarResponseResult })
  result?: ChartFavStarResponseResult[];
}
