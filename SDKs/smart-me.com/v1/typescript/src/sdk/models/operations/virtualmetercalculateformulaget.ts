import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualMeterCalculateFormulaGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=formula" })
  formula: string;
}


export class VirtualMeterCalculateFormulaGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VirtualMeterCalculateFormulaGetQueryParams;
}


export class VirtualMeterCalculateFormulaGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  device?: shared.Device;

  @Metadata()
  statusCode: number;
}
