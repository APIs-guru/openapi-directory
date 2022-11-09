import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersPackageItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=systems_installed" })
  systemsInstalled?: number;

  @Metadata({ data: "json, name=systems_updatable" })
  systemsUpdatable?: number;
}
