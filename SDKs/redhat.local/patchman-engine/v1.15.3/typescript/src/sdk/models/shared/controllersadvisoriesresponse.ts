import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControllersAdvisoryItem } from "./controllersadvisoryitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";


export class ControllersAdvisoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ControllersAdvisoryItem })
  data?: ControllersAdvisoryItem[];

  @Metadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
