import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Application
/** 
 * Metadata about the application
**/
export class Application extends SpeakeasyBase {
  @Metadata({ data: "json, name=application_id" })
  applicationId: string;

  @Metadata({ data: "json, name=application_url" })
  applicationUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=logo_url" })
  logoUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=reason_for_access" })
  reasonForAccess: string;
}
