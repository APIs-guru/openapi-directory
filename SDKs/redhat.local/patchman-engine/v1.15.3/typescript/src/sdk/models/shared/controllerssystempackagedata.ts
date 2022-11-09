import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelsPackageUpdate } from "./modelspackageupdate";


export class ControllersSystemPackageData extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=evra" })
  evra?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=updatable" })
  updatable?: boolean;

  @Metadata({ data: "json, name=updates", elemType: shared.ModelsPackageUpdate })
  updates?: ModelsPackageUpdate[];
}
