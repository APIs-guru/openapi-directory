import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersAdvisoryDetailItem } from "./controllersadvisorydetailitem";



export class ControllersAdvisoryDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ControllersAdvisoryDetailItem;
}
