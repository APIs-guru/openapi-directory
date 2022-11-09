import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdditionalDeviceInformationGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AdditionalDeviceInformationGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdditionalDeviceInformationGetPathParams;
}


export class AdditionalDeviceInformationGetResponse extends SpeakeasyBase {
  @Metadata()
  additionalDeviceInformation?: shared.AdditionalDeviceInformation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
