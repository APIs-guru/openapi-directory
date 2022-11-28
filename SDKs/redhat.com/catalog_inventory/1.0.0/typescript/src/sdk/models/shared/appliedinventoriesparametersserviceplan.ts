import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppliedInventoriesParametersServicePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service_parameters" })
  serviceParameters?: Map<string, any>;
}
