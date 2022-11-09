import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersAdvisoriesSystemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, string[]>;
}
