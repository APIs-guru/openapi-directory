import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersSystemItem } from "./controllerssystemitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";



export class ControllersAdvisorySystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ControllersSystemItem })
  data?: ControllersSystemItem[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
