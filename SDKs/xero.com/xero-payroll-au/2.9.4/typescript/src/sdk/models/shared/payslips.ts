import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payslip } from "./payslip";



export class Payslips extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Payslips", elemType: Payslip })
  payslips?: Payslip[];
}
