import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValuesInPastMultipleGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ValuesInPastMultipleGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;
}


export class ValuesInPastMultipleGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ValuesInPastMultipleGetPathParams;

  @Metadata()
  queryParams: ValuesInPastMultipleGetQueryParams;
}


export class ValuesInPastMultipleGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ValuesData })
  valuesData?: shared.ValuesData[];
}
