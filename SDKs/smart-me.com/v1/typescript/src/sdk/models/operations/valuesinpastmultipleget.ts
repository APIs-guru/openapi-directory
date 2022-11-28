import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValuesInPastMultipleGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ValuesInPastMultipleGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;
}


export class ValuesInPastMultipleGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ValuesInPastMultipleGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ValuesInPastMultipleGetQueryParams;
}


export class ValuesInPastMultipleGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ValuesData })
  valuesData?: shared.ValuesData[];
}
