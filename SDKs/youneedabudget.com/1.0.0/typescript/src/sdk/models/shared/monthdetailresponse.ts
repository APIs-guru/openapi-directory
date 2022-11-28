import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonthDetail } from "./monthdetail";



export class MonthDetailResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=month" })
  month: MonthDetail;
}


export class MonthDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: MonthDetailResponseData;
}
