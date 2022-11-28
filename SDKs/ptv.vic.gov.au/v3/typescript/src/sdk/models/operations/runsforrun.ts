import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RunsForRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_ref" })
  runRef: string;
}

export enum RunsForRunExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}


export class RunsForRunQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_utc" })
  dateUtc?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand: RunsForRunExpandEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class RunsForRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RunsForRunPathParams;

  @SpeakeasyMetadata()
  queryParams: RunsForRunQueryParams;
}


export class RunsForRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @SpeakeasyMetadata()
  v3RunsResponse?: shared.V3RunsResponse;
}
