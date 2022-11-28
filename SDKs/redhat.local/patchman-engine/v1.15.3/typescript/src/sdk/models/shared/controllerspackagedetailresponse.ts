import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersPackageDetailItem } from "./controllerspackagedetailitem";



export class ControllersPackageDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ControllersPackageDetailItem;
}
