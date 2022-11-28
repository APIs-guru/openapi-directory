import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelsPackageUpdate } from "./modelspackageupdate";



export class ControllersSystemPackageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=evra" })
  evra?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=updatable" })
  updatable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updates", elemType: ModelsPackageUpdate })
  updates?: ModelsPackageUpdate[];
}
