import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Application
/** 
 * Metadata about the application
**/
export class Application extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=application_url" })
  applicationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=logo_url" })
  logoUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=reason_for_access" })
  reasonForAccess: string;
}
