import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVaccineStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType: string;
}


export class GetVaccineStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetVaccineStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.VaccineStatusRequest;
}


export class GetVaccineStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problem?: shared.Problem;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vaccineResponse?: shared.VaccineResponse;
}
