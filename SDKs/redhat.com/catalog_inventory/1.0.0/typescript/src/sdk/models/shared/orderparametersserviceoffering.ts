import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderParametersServiceOfferingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider_control_parameters" })
  providerControlParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=service_parameters" })
  serviceParameters?: Map<string, any>;
}
