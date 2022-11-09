import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceObject } from "./deviceobject";


// DevicesObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-devicesobject - Find more info on the official Spotify Web API Reference
**/
export class DevicesObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.DeviceObject })
  devices?: DeviceObject[];
}
