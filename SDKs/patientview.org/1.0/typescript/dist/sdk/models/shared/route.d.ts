import { SpeakeasyBase } from "../../../internal/utils";
import { Lookup } from "./lookup";
export declare class Route extends SpeakeasyBase {
    controller?: string;
    created?: Date;
    displayOrder?: number;
    id?: number;
    lookup?: Lookup;
    templateUrl?: string;
    title?: string;
    url?: string;
}
