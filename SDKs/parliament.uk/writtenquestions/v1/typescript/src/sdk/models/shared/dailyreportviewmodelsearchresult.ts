import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DailyReportViewModelItem } from "./dailyreportviewmodelitem";



export class DailyReportViewModelSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: DailyReportViewModelItem })
  results?: DailyReportViewModelItem[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
