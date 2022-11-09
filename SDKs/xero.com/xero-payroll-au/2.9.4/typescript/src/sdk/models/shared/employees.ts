import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Employee } from "./employee";


export class Employees extends SpeakeasyBase {
  @Metadata({ data: "json, name=Employees", elemType: shared.Employee })
  employees?: Employee[];
}
