import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValuesInPastGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ValuesInPastGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date: Date;
}


export class ValuesInPastGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ValuesInPastGetPathParams;

  @Metadata()
  queryParams: ValuesInPastGetQueryParams;
}


export class ValuesInPastGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  valuesData?: shared.ValuesData;
}
