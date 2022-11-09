import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatementsViewModelItem } from "./statementsviewmodelitem";


export class StatementsViewModelSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.StatementsViewModelItem })
  results?: StatementsViewModelItem[];

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
