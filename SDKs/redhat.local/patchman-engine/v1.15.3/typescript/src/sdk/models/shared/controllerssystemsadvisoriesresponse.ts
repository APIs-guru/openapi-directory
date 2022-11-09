import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersSystemsAdvisoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, string[]>;
}
