import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatementsViewModelItem } from "./statementsviewmodelitem";



export class StatementsViewModelSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: StatementsViewModelItem })
  results?: StatementsViewModelItem[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
