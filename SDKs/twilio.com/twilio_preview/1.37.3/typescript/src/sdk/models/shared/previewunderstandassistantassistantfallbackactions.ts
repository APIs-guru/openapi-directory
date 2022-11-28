import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewUnderstandAssistantAssistantFallbackActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
