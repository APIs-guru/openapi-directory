import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDevicesIdAccumulatorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutDevicesIdAccumulatorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDevicesIdAccumulatorsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeviceAccumulators;
}


export class PutDevicesIdAccumulatorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
