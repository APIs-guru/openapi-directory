import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=assigned_add_on_sid" })
  assignedAddOnSid?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=product_name" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_sid" })
  resourceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
