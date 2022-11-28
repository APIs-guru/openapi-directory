import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersPackageSystemItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available_evra" })
  availableEvra?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=installed_evra" })
  installedEvra?: string;

  @SpeakeasyMetadata({ data: "json, name=updatable" })
  updatable?: boolean;
}
