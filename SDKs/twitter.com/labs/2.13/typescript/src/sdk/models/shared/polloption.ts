import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PollOption
/** 
 * Describes a choice in a Poll object.
**/
export class PollOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position: number;

  @SpeakeasyMetadata({ data: "json, name=votes" })
  votes: number;
}
