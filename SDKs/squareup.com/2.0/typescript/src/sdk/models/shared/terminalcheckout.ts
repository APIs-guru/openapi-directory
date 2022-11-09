import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { DeviceCheckoutOptions } from "./devicecheckoutoptions";


export class TerminalCheckout extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=app_id" })
  appId?: string;

  @Metadata({ data: "json, name=cancel_reason" })
  cancelReason?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=deadline_duration" })
  deadlineDuration?: string;

  @Metadata({ data: "json, name=device_options" })
  deviceOptions: DeviceCheckoutOptions;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=payment_ids" })
  paymentIds?: string[];

  @Metadata({ data: "json, name=payment_type" })
  paymentType?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
