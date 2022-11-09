import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RunsForRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_ref" })
  runRef: string;
}

export enum RunsForRunExpandEnum {
    All = "All"
,    VehicleDescriptor = "VehicleDescriptor"
,    VehiclePosition = "VehiclePosition"
,    None = "None"
}


export class RunsForRunQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_utc" })
  dateUtc?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=devid" })
  devid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand: RunsForRunExpandEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_geopath" })
  includeGeopath?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=signature" })
  signature?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}


export class RunsForRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RunsForRunPathParams;

  @Metadata()
  queryParams: RunsForRunQueryParams;
}


export class RunsForRunResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v3ErrorResponse?: shared.V3ErrorResponse;

  @Metadata()
  v3RunsResponse?: shared.V3RunsResponse;
}
