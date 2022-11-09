import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuestionsViewModelItem } from "./questionsviewmodelitem";


export class QuestionsViewModelSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.QuestionsViewModelItem })
  results?: QuestionsViewModelItem[];

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
