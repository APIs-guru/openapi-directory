import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayInstructionPayInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=PayLineTag" })
  payLineTag?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;
}


export class PayInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayInstruction" })
  payInstruction?: PayInstructionPayInstruction;
}
