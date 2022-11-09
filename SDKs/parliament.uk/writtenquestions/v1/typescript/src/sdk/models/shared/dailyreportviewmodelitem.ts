import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Link } from "./link";
import { DailyReportViewModel } from "./dailyreportviewmodel";


export class DailyReportViewModelItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=value" })
  value?: DailyReportViewModel;
}
