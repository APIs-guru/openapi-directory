import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RoadDisruptedStreetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;
}


export class RoadDisruptedStreetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RoadDisruptedStreetsQueryParams;
}


export class RoadDisruptedStreetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
