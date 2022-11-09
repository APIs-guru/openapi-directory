import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentBillingInfo } from "./environmentbillinginfo";


export class EnvironmentStateChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: EnvironmentBillingInfo;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=newValue" })
  newValue?: number;

  @Metadata({ data: "json, name=oldValue" })
  oldValue?: number;

  @Metadata({ data: "json, name=partitionKey" })
  partitionKey?: string;

  @Metadata({ data: "json, name=time" })
  time?: Date;
}
