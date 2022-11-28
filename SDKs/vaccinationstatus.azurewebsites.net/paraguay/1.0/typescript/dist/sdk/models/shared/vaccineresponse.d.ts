import { SpeakeasyBase } from "../../../internal/utils";
import { Vaccine } from "./vaccine";
export declare class VaccineResponse extends SpeakeasyBase {
    age?: number;
    country?: string;
    gender?: string;
    name?: string;
    vaccinations?: Vaccine[];
}
