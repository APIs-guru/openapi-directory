import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersSystemPackageData } from "./controllerssystempackagedata";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";



export class ControllersSystemPackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ControllersSystemPackageData })
  data?: ControllersSystemPackageData[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
