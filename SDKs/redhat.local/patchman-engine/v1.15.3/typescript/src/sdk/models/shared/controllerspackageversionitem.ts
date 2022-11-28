import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersPackageVersionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evra" })
  evra?: string;
}
