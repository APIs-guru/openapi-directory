import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersPackageDetailAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advisory_id" })
  advisoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
