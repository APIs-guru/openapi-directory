import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuestionsViewModelItem } from "./questionsviewmodelitem";



export class QuestionsViewModelSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: QuestionsViewModelItem })
  results?: QuestionsViewModelItem[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
