import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RoadDisruptedStreetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;
}


export class RoadDisruptedStreetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RoadDisruptedStreetsQueryParams;
}


export class RoadDisruptedStreetsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
