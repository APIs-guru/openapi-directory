import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersSystemsAdvisoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=advisories" })
  advisories?: string[];

  @Metadata({ data: "json, name=systems" })
  systems?: string[];
}
