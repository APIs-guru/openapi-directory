import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Payslip } from "./payslip";


export class Payslips extends SpeakeasyBase {
  @Metadata({ data: "json, name=Payslips", elemType: shared.Payslip })
  payslips?: Payslip[];
}
