import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VenueApiDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VenueApiDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hardDelete" })
  hardDelete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes?: string;
}


export class VenueApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VenueApiDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: VenueApiDeleteQueryParams;
}


export class VenueApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
