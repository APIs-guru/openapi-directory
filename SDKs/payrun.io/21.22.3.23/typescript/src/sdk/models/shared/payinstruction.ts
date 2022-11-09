import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayInstructionPayInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=PayLineTag" })
  payLineTag?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;
}


export class PayInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayInstruction" })
  payInstruction?: PayInstructionPayInstruction;
}
