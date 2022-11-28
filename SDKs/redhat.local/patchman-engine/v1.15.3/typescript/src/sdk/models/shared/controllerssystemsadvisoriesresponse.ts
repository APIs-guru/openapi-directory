import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersSystemsAdvisoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, string[]>;
}
