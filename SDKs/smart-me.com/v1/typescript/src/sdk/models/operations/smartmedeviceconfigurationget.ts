import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SmartMeDeviceConfigurationGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SmartMeDeviceConfigurationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SmartMeDeviceConfigurationGetPathParams;
}


export class SmartMeDeviceConfigurationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  smartMeDeviceConfigurationContainer?: shared.SmartMeDeviceConfigurationContainer;

  @SpeakeasyMetadata()
  statusCode: number;
}
