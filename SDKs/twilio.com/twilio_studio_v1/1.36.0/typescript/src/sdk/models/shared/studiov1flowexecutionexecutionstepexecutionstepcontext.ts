import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StudioV1FlowExecutionExecutionStepExecutionStepContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=context" })
  context?: any;

  @Metadata({ data: "json, name=execution_sid" })
  executionSid?: string;

  @Metadata({ data: "json, name=flow_sid" })
  flowSid?: string;

  @Metadata({ data: "json, name=step_sid" })
  stepSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
