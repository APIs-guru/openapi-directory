import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddClientSecret
/** 
 * The Add Client Secret Request Model
**/
export class AddClientSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;
}
