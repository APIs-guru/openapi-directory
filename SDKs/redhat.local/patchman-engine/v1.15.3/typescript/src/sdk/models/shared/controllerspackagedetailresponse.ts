import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersPackageDetailItem } from "./controllerspackagedetailitem";


export class ControllersPackageDetailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: ControllersPackageDetailItem;
}
