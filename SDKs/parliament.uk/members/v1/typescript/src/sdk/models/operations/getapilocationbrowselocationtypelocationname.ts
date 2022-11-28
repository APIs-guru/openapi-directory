import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiLocationBrowseLocationTypeLocationNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationName" })
  locationName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationType" })
  locationType: number;
}


export class GetApiLocationBrowseLocationTypeLocationNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiLocationBrowseLocationTypeLocationNamePathParams;
}


export class GetApiLocationBrowseLocationTypeLocationNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationItem?: shared.LocationItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
