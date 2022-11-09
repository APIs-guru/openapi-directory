import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControllersPackageItem } from "./controllerspackageitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";


export class ControllersPackagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ControllersPackageItem })
  data?: ControllersPackageItem[];

  @Metadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
