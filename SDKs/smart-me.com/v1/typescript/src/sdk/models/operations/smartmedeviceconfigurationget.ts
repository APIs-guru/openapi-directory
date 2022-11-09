import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SmartMeDeviceConfigurationGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SmartMeDeviceConfigurationGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SmartMeDeviceConfigurationGetPathParams;
}


export class SmartMeDeviceConfigurationGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  smartMeDeviceConfigurationContainer?: shared.SmartMeDeviceConfigurationContainer;

  @Metadata()
  statusCode: number;
}
