import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-deviceobject - Find more info on the official Spotify Web API Reference
**/
export class DeviceObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @Metadata({ data: "json, name=is_private_session" })
  isPrivateSession?: boolean;

  @Metadata({ data: "json, name=is_restricted" })
  isRestricted?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=volume_percent" })
  volumePercent?: number;
}
