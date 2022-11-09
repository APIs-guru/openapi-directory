import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersAdvisoryDetailItem } from "./controllersadvisorydetailitem";


export class ControllersAdvisoryDetailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: ControllersAdvisoryDetailItem;
}
