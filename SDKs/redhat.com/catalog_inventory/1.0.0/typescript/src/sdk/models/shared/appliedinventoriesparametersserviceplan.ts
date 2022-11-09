import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppliedInventoriesParametersServicePlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=service_parameters" })
  serviceParameters?: Map<string, any>;
}
