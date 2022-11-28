import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersAdvisoryItem } from "./controllersadvisoryitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";



export class ControllersAdvisoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ControllersAdvisoryItem })
  data?: ControllersAdvisoryItem[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
