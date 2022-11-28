import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StudioV2FlowExecutionExecutionStepExecutionStepContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: any;

  @SpeakeasyMetadata({ data: "json, name=execution_sid" })
  executionSid?: string;

  @SpeakeasyMetadata({ data: "json, name=flow_sid" })
  flowSid?: string;

  @SpeakeasyMetadata({ data: "json, name=step_sid" })
  stepSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
