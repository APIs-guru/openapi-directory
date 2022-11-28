import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModelsPackageUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advisory" })
  advisory?: string;

  @SpeakeasyMetadata({ data: "json, name=evra" })
  evra?: string;
}
