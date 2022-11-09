import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControllersPackageSystemItem } from "./controllerspackagesystemitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";


export class ControllersPackageSystemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ControllersPackageSystemItem })
  data?: ControllersPackageSystemItem[];

  @Metadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
