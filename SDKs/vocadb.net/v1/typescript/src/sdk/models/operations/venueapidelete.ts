import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VenueApiDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VenueApiDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class VenueApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VenueApiDeletePathParams;

  @Metadata()
  queryParams: VenueApiDeleteQueryParams;
}


export class VenueApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
