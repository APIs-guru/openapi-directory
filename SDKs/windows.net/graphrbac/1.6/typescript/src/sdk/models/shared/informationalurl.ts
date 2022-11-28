import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InformationalUrl
/** 
 * Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.
**/
export class InformationalUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=marketing" })
  marketing?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: string;

  @SpeakeasyMetadata({ data: "json, name=support" })
  support?: string;

  @SpeakeasyMetadata({ data: "json, name=termsOfService" })
  termsOfService?: string;
}
