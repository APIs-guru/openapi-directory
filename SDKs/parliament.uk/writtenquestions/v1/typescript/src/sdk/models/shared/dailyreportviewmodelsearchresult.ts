import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DailyReportViewModelItem } from "./dailyreportviewmodelitem";


export class DailyReportViewModelSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.DailyReportViewModelItem })
  results?: DailyReportViewModelItem[];

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
