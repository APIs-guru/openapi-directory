import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControllersSystemItem } from "./controllerssystemitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";


export class ControllersAdvisorySystemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ControllersSystemItem })
  data?: ControllersSystemItem[];

  @Metadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
