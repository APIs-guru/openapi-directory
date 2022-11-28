import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersSystemAdvisoriesDbLookup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advisory_type" })
  advisoryType?: number;

  @SpeakeasyMetadata({ data: "json, name=cve_count" })
  cveCount?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=public_date" })
  publicDate?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: number;

  @SpeakeasyMetadata({ data: "json, name=synopsis" })
  synopsis?: string;
}
