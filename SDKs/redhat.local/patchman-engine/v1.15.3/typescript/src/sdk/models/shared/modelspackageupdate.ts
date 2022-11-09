import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModelsPackageUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=advisory" })
  advisory?: string;

  @Metadata({ data: "json, name=evra" })
  evra?: string;
}
