import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersPackageSystemItem } from "./controllerspackagesystemitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";



export class ControllersPackageSystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ControllersPackageSystemItem })
  data?: ControllersPackageSystemItem[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
