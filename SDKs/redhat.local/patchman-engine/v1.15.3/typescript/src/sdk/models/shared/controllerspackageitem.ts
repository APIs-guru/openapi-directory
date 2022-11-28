import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersPackageItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=systems_installed" })
  systemsInstalled?: number;

  @SpeakeasyMetadata({ data: "json, name=systems_updatable" })
  systemsUpdatable?: number;
}
