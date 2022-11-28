import { SpeakeasyBase } from "../../../internal/utils";
import { Lookup } from "./lookup";
export declare class Link extends SpeakeasyBase {
    created?: Date;
    displayOrder?: number;
    id?: number;
    lastUpdate?: Date;
    link?: string;
    linkType?: Lookup;
    name?: string;
}
