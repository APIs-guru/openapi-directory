import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PollOption
/** 
 * Describes a choice in a Poll object.
**/
export class PollOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=position" })
  position: number;

  @Metadata({ data: "json, name=votes" })
  votes: number;
}
