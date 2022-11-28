import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddClientSecret
/** 
 * The Add Client Secret Request Model
**/
export class AddClientSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;
}
