import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonthDetail } from "./monthdetail";


export class MonthDetailResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=month" })
  month: MonthDetail;
}


export class MonthDetailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: MonthDetailResponseData;
}
