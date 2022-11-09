import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLocationBrowseLocationTypeLocationNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=locationName" })
  locationName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=locationType" })
  locationType: number;
}


export class GetApiLocationBrowseLocationTypeLocationNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiLocationBrowseLocationTypeLocationNamePathParams;
}


export class GetApiLocationBrowseLocationTypeLocationNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  locationItem?: shared.LocationItem;

  @Metadata()
  statusCode: number;
}
