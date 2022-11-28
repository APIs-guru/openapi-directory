import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { DailyReportViewModel } from "./dailyreportviewmodel";



export class DailyReportViewModelItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: DailyReportViewModel;
}
