import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Employee } from "./employee";



export class Employees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Employees", elemType: Employee })
  employees?: Employee[];
}
