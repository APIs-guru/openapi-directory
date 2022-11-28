import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FastSendDeviceValuesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FastSendDeviceValuesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FastSendDeviceValuesGetPathParams;
}


export class FastSendDeviceValuesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
