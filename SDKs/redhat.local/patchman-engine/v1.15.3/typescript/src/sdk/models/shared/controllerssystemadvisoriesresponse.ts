import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControllersSystemAdvisoryItem } from "./controllerssystemadvisoryitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";


export class ControllersSystemAdvisoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ControllersSystemAdvisoryItem })
  data?: ControllersSystemAdvisoryItem[];

  @Metadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
