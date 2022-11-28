import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValuesInPastGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ValuesInPastGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: Date;
}


export class ValuesInPastGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ValuesInPastGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ValuesInPastGetQueryParams;
}


export class ValuesInPastGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  valuesData?: shared.ValuesData;
}
