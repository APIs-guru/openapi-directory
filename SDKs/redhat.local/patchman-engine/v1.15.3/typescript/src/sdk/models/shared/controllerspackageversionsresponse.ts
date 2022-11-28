import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersPackageVersionItem } from "./controllerspackageversionitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";



export class ControllersPackageVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ControllersPackageVersionItem })
  data?: ControllersPackageVersionItem[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
