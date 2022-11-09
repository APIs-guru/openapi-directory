import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MeterValuesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class MeterValuesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: Date;
}


export class MeterValuesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MeterValuesGetPathParams;

  @Metadata()
  queryParams: MeterValuesGetQueryParams;
}


export class MeterValuesGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  deviceInPast?: shared.DeviceInPast;

  @Metadata()
  statusCode: number;
}
