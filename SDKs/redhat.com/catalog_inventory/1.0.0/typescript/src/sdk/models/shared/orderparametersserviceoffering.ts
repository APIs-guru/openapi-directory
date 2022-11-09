import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderParametersServiceOffering extends SpeakeasyBase {
  @Metadata({ data: "json, name=provider_control_parameters" })
  providerControlParameters?: Map<string, any>;

  @Metadata({ data: "json, name=service_parameters" })
  serviceParameters?: Map<string, any>;

  @Metadata({ data: "json, name=service_plan_id" })
  servicePlanId?: string;
}
