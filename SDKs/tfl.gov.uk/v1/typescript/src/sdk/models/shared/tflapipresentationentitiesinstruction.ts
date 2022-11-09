import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesInstructionStep } from "./tflapipresentationentitiesinstructionstep";


export class TflApiPresentationEntitiesInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=detailed" })
  detailed?: string;

  @Metadata({ data: "json, name=steps", elemType: shared.TflApiPresentationEntitiesInstructionStep })
  steps?: TflApiPresentationEntitiesInstructionStep[];

  @Metadata({ data: "json, name=summary" })
  summary?: string;
}
