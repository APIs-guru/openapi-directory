import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersSystemsAdvisoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advisories" })
  advisories?: string[];

  @SpeakeasyMetadata({ data: "json, name=systems" })
  systems?: string[];
}
