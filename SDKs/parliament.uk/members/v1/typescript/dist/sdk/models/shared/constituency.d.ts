import { SpeakeasyBase } from "../../../internal/utils";
import { ConstituencyRepresentation } from "./constituencyrepresentation";
export declare class Constituency extends SpeakeasyBase {
    currentRepresentation?: ConstituencyRepresentation;
    endDate?: Date;
    id?: number;
    name?: string;
    startDate?: Date;
}
