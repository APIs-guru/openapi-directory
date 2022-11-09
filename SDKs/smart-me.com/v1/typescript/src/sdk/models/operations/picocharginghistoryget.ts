import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PicoChargingHistoryGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PicoChargingHistoryGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PicoChargingHistoryGetPathParams;
}


export class PicoChargingHistoryGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PicoChargingHistoryData })
  picoChargingHistoryData?: shared.PicoChargingHistoryData[];

  @Metadata()
  statusCode: number;
}
