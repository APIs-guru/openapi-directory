import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersPackageDetailAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=advisory_id" })
  advisoryId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
