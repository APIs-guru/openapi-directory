import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceObject } from "./deviceobject";



// DevicesObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-devicesobject - Find more info on the official Spotify Web API Reference
**/
export class DevicesObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: DeviceObject })
  devices?: DeviceObject[];
}
