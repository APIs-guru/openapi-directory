import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeterValuesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class MeterValuesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: Date;
}


export class MeterValuesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeterValuesGetPathParams;

  @SpeakeasyMetadata()
  queryParams: MeterValuesGetQueryParams;
}


export class MeterValuesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceInPast?: shared.DeviceInPast;

  @SpeakeasyMetadata()
  statusCode: number;
}
