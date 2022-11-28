import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersSystemAdvisoryItem } from "./controllerssystemadvisoryitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";



export class ControllersSystemAdvisoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ControllersSystemAdvisoryItem })
  data?: ControllersSystemAdvisoryItem[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
