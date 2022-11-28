import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PicoChargingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PicoChargingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PicoChargingGetPathParams;
}


export class PicoChargingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  picoChargingData?: shared.PicoChargingData;

  @SpeakeasyMetadata()
  statusCode: number;
}
