import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InformationalUrl
/** 
 * Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.
**/
export class InformationalUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=marketing" })
  marketing?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: string;

  @Metadata({ data: "json, name=support" })
  support?: string;

  @Metadata({ data: "json, name=termsOfService" })
  termsOfService?: string;
}
