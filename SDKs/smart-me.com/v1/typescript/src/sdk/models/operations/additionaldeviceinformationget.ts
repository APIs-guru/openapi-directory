import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AdditionalDeviceInformationGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AdditionalDeviceInformationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdditionalDeviceInformationGetPathParams;
}


export class AdditionalDeviceInformationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  additionalDeviceInformation?: shared.AdditionalDeviceInformation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
