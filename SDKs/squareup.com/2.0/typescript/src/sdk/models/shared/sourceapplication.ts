import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceApplication
/** 
 * Provides information about the application used to generate a change.
**/
export class SourceApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=application_id" })
  applicationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=product" })
  product?: string;
}
