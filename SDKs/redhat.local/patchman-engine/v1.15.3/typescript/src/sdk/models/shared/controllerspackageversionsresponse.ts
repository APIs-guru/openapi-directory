import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControllersPackageVersionItem } from "./controllerspackageversionitem";
import { ControllersLinks } from "./controllerslinks";
import { ControllersListMeta } from "./controllerslistmeta";


export class ControllersPackageVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ControllersPackageVersionItem })
  data?: ControllersPackageVersionItem[];

  @Metadata({ data: "json, name=links" })
  links?: ControllersLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: ControllersListMeta;
}
