import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentBillingInfo } from "./environmentbillinginfo";



export class EnvironmentStateChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: EnvironmentBillingInfo;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=newValue" })
  newValue?: number;

  @SpeakeasyMetadata({ data: "json, name=oldValue" })
  oldValue?: number;

  @SpeakeasyMetadata({ data: "json, name=partitionKey" })
  partitionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;
}
