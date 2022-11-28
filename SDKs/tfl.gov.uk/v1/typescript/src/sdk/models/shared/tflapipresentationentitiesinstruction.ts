import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesInstructionStep } from "./tflapipresentationentitiesinstructionstep";



export class TflApiPresentationEntitiesInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailed" })
  detailed?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: TflApiPresentationEntitiesInstructionStep })
  steps?: TflApiPresentationEntitiesInstructionStep[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}
