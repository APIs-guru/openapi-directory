import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-deviceobject - Find more info on the official Spotify Web API Reference
**/
export class DeviceObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_private_session" })
  isPrivateSession?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_restricted" })
  isRestricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=volume_percent" })
  volumePercent?: number;
}
