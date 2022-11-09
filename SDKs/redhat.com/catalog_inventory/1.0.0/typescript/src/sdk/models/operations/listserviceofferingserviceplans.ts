import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListServiceOfferingServicePlansPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ListServiceOfferingServicePlansQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" })
  filter?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=deepObject;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class ListServiceOfferingServicePlansRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListServiceOfferingServicePlansPathParams;

  @Metadata()
  queryParams: ListServiceOfferingServicePlansQueryParams;
}


export class ListServiceOfferingServicePlansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  servicePlansCollection?: shared.ServicePlansCollection;

  @Metadata()
  statusCode: number;
}
