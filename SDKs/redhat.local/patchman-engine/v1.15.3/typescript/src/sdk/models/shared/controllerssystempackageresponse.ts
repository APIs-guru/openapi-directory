import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControllersSystemPackageData } from "./controllerssystempackagedata";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";


export class ControllersSystemPackageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ControllersSystemPackageData })
  data?: ControllersSystemPackageData[];

  @Metadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
