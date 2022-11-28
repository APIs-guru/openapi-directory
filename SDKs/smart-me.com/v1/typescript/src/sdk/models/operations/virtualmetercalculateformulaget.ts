import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualMeterCalculateFormulaGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=formula" })
  formula: string;
}


export class VirtualMeterCalculateFormulaGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VirtualMeterCalculateFormulaGetQueryParams;
}


export class VirtualMeterCalculateFormulaGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  device?: shared.Device;

  @SpeakeasyMetadata()
  statusCode: number;
}
