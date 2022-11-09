import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVaccineStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class GetVaccineStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetVaccineStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.VaccineStatusRequest;
}


export class GetVaccineStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problem?: shared.Problem;

  @Metadata()
  statusCode: number;

  @Metadata()
  vaccineResponse?: shared.VaccineResponse;
}
